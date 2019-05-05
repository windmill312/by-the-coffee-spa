import React from 'react';
import { Route, Switch } from 'react-router';
import CafesList from '../components/CafesList/Cafes';
import CafesMap from '../components/CafesMap/Cafes';
import CafeInfo from '../components/CafesList/CafeInfo';
import Products from '../components/ProductsList/Products';
import ProductInfo from '../components/ProductsList/ProductInfo';

const CafesPage = () => (
  <Switch>
    <Route path="/cafes/map" exact component={CafesMap} />
    <Route path="/cafes/list" exact component={CafesList} />
    <Route path="/cafes/:id" exact component={CafeInfo} />
    <Route path="/cafes/:id/products" exact component={Products} />
    <Route path="/cafes/:cafeId/products/:productId" exact component={ProductInfo} />
  </Switch>
);

export default CafesPage;
