import React, { useEffect, useState } from 'react';
import { updateOrderStatus } from '../api/orders';
import SubTitle from '../components/common/SubTitle';
import Loader from '../components/common/Loader';
import Fallback from '../components/common/Fallback';

const ScanQrCodePage = ({
  match: {
    params: { id },
  },
}) => {
  // && localStorage.getItem('role') === 'MANAGER'
  if (localStorage.getItem('isAuth') === 'true') {
    const [message, setMessage] = useState({ isLoading: true, data: null });

    useEffect(() => {
      updateOrderStatus({ orderUid: id, status: `SUCCESSFULLY_COMPLETED` })
        .then(() => setMessage({ isLoading: false, data: `Order successfully completed` }))
        .catch(err =>
          setMessage({ isLoading: false, data: `Order with uid:${id} failed by reason:${err}` }),
        );
    }, []);

    return (
      <Fallback isLoading={message.isLoading} Component={Loader}>
        <SubTitle>{message.data}</SubTitle>
      </Fallback>
    );
  }
  return <SubTitle>Authentication and sufficient role required</SubTitle>;
};

export default ScanQrCodePage;
