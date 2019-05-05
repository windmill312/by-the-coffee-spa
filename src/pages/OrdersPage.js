import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getOrders } from '../api/orders';
import OrdersList from '../components/OrdersList/OrdersList';
import Fallback from '../components/common/Fallback';
import Loader from '../components/common/Loader';

const Orders = ({ className }) => {
  const [orders, setOrders] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getOrders().then(res => {
      setOrders({ isLoading: false, data: res.data });
    });
  }, []);

  return (
    <div className={className}>
      <Fallback isLoading={orders.isLoading} Component={Loader}>
        <OrdersList orders={orders.data} />
      </Fallback>
    </div>
  );
};

export default withRouter(Orders);
