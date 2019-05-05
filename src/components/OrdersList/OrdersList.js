import React from 'react';
import styled from 'styled-components';
import Order from './Order';

const Orders = ({ className, orders }) => (
  <div className={className}>
    {orders.map(order => (
      <Order {...order} key={order.orderUid} />
    ))}
  </div>
);

const StyledCafes = styled(Orders)`
  margin-top: 20px;
`;

export default StyledCafes;
