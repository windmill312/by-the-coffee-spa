import React from 'react';
import { Route, Switch } from 'react-router';
import Cafes from '../components/CafesMapPage/Cafes';
import Cafe from '../components/CafesListPage/Cafe';

const CafesListPage = () => (
  <Switch>
    <Route path="/cafes-list/" exact component={Cafes} />
    <Route path="/cafes/:id/" exact component={Cafe} />
  </Switch>
);

export default CafesListPage;
