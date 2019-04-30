import React from 'react';
import { Route, Switch } from 'react-router';
import Cafes from '../components/CafesMapPage/Cafes';
import Cafe from '../components/CafesListPage/Cafe';

const CafesMapPage = () => (
  <Switch>
    <Route path="/cafes-map/" exact component={Cafes} />
    <Route path="/cafes/:id/" exact component={Cafe} />
  </Switch>
);

export default CafesMapPage;
