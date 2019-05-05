import React from 'react';
import { Route, Switch } from 'react-router';
import CafeProducts from '../components/CafeProducts';
import CafesList from '../components/CafesList/Cafes';
import CafesMap from '../components/CafesMap/Cafes';
import CafeInfo from '../components/CafesList/CafeInfo';

const CafesPage = () => (
  <Switch>
    <Route path="/cafes/map" exact component={CafesMap} />
    <Route path="/cafes/list" exact component={CafesList} />
    <Route path="/cafes/:id/" exact component={CafeInfo} />
    <Route path="/cafes/:id/products" exact component={CafeProducts} />
  </Switch>
);

export default CafesPage;
