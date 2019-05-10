import React, { useState, useEffect } from 'react';
import Box from '../components/common/Box';
import SubTitle from '../components/common/SubTitle';
import Meta from '../components/common/Meta';
import Button from '../components/common/Button';
import LoginPage from './LoginPage';
import { getCustomerIdentifier } from '../api/customer';
import Fallback from '../components/common/Fallback';
import Loader from '../components/common/Loader';
import { getOAuthCode } from '../api/oauth';

const OAuthPage = ({ history }) => {
  const serviceUid = history.location.search.match(/clientId=([^&]*)/i)[1];
  const redirectUri = history.location.search.match(/redirectUri=([^&]*)/i)[1];

  const submit = () => {
    getOAuthCode({ clientId: serviceUid, redirectUri }).then(res => {
      window.location = `${redirectUri}/callback?code=${res}`;
    });
  };

  const reject = () => {
    window.location = `${redirectUri}`;
  };

  if (localStorage.getItem('isAuth') === 'true') {
    const [service, setService] = useState({ isLoading: true });

    useEffect(() => {
      getCustomerIdentifier({ customerUid: serviceUid }).then(res =>
        setService({ isLoading: false, ...res }),
      );
    }, []);

    return (
      <Fallback isLoading={service.isLoading} Component={Loader}>
        <Box>
          <SubTitle>Приложение {service.identifier} запрашивает доступ к Вашему аккаунту.</SubTitle>
          <Meta>
            <Button onClick={submit}>Разрешить</Button>
            <Button onClick={reject}>Запретить</Button>
          </Meta>
        </Box>
      </Fallback>
    );
  }
  return (
    <LoginPage callback={`/oauth/authorize?clientId=${serviceUid}&redirectUri=${redirectUri}`} />
  );
};

export default OAuthPage;
