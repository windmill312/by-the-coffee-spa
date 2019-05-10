import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Orders from '../components/OrdersList/Orders';
import OrderInfo from '../components/OrdersList/OrderInfo';

const OrdersPage = () => (
  <Switch>
    <Route path="/orders" exact component={Orders} />
    <Route path="/orders/:id" exact component={OrderInfo} />
  </Switch>
);

export default OrdersPage;
