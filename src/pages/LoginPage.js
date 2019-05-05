import React, { useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Input from '../components/common/Input';
import Box from '../components/common/Box';
import Button from '../components/common/Button';
import { login } from '../api/customer';
import Separator from '../components/common/Separator';

const Title = styled.h1`
  margin: 16px 0 0 0;
  padding: 0;
  font-weight: 800;
  font-size: 2rem;
  color: #333333;
  @media (max-width: 450px) {
    font-size: 1.25rem;
  }
`;

const SubTitle = styled.h2`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #9c9c9c;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const LoginPage = ({ className, history }) => {
  const identifierRef = useRef(null);
  const passwordRef = useRef(null);

  const submit = () => {
    const identifier = identifierRef.current.value;
    const password = passwordRef.current.value;

    login({
      identifier,
      password,
    })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('isAuth', true);
          localStorage.setItem('customerUid', res.data.customerUid);
          history.push(`/cafes/map/`);
        }
      })
      .catch(err => {
        console.log(`status = ${err.status}`);
      });
  };

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>Вход</Title>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Логин</SubTitle>
          <Input ref={identifierRef} />

          <SubTitle>Пароль</SubTitle>
          <Input ref={passwordRef} />

          <br />
          <Button onClick={submit}>Войти</Button>
        </Content>
      </Box>
    </div>
  );
};

const StyledCafes = styled(LoginPage)`
  ${Input} {
    min-width: 60%;
  }
`;

export default withRouter(StyledCafes);
