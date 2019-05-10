import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getOrdersByCustomer } from '../../api/orders';
import OrdersList from './OrdersList';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import SubTitle from '../common/SubTitle';
import Title from '../common/Title';
import TitleContainer from '../common/TitleContainer';

const Orders = ({ className }) => {
  const [orders, setOrders] = useState({ isLoading: true, data: [], isError: false });
  const customerUid = localStorage.getItem('customerUid');

  useEffect(() => {
    getOrdersByCustomer({ customerUid })
      .then(res => setOrders({ isLoading: false, data: res.data, isError: false }))
      .catch(err => {
        console.log(`Get error while getting all orders: ${err}`);
        setOrders({ isLoading: false, data: [], isError: true });
      });
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Мои заказы</Title>
      </TitleContainer>
      <Fallback isLoading={orders.isLoading} Component={Loader}>
        {orders.isError ? (
          <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
        ) : (
          <OrdersList orders={orders.data} />
        )}
      </Fallback>
    </div>
  );
};

const StyledOrders = styled(Orders)`
  ${SubTitle} {
    color: #ee6b21;
  }

  ${Title} {
    margin: 16px 0 10px 0;
    padding: 0;
    font-weight: 800;
    font-size: 2rem;
    color: #333333;
    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }

  margin-top: 20px;
`;

export default withRouter(StyledOrders);
