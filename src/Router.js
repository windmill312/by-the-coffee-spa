import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';


import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
/*
import CanteenPage from 'pages/CanteenPage';
import CartPage from 'pages/CartPage';*/
import Header from 'containers/HeaderContainer';
import StyledContainer from './components/Container';
import StyledContent from './components/Content';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <StyledContainer>
      <StyledContent>
        <Switch>
          <Router path="/" exact component={HomePage} />
          /*{<Route path="/cart" exact component={CartPage} />}
          {/*<Route path="/canteens/:canteenUid" exact component={CanteenPage} />}*/
          <Route component={NotFoundPage} />
        </Switch>
      </StyledContent>
    </StyledContainer>
  </ConnectedRouter>
);

export default RootRouter;