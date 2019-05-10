import React from 'react';
import Order from './Order';

const Orders = ({ className, orders }) => (
  <div className={className}>
    {orders.map(order => (
      <Order {...order} key={order.orderUid} />
    ))}
  </div>
);

export default Orders;
