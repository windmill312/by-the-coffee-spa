import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import CafesMapPage from './pages/CafesMapPage';
import CafesListPage from './pages/CafesListPage';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header';
import StyledContainer from './components/Container';
import StyledContent from './components/Content';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <StyledContainer>
      <StyledContent>
        <Switch>
          <Route path="/cafes-map" component={CafesMapPage} />
          <Route path="/cafes-list" component={CafesListPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </StyledContent>
    </StyledContainer>
  </ConnectedRouter>
);

export default RootRouter;
