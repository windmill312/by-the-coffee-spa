import React from 'react';
import styled from 'styled-components';
import Order from './Order';
import Title from '../common/Title';
import TitleContainer from '../common/TitleContainer';

const Orders = ({ className, orders }) => (
  <div className={className}>
    <TitleContainer>
      <Title>Мои заказы</Title>
    </TitleContainer>
    {orders.map(order => (
      <Order {...order} key={order.orderUid} />
    ))}
  </div>
);

const StyledCafes = styled(Orders)`
  margin-top: 20px;
`;

export default StyledCafes;
