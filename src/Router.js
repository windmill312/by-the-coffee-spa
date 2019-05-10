import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/common/Header';
import StyledContainer from './components/common/Container';
import StyledContent from './components/common/Content';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CafesPage from './pages/CafesPage';
import OrdersPage from './pages/OrdersPage';
import CartPage from './pages/CartPage';
import CustomerPage from './pages/CustomerPage';
import ScanQrCodePage from './pages/ScanQrCodePage';
import OAuthPage from './pages/OAuthPage';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <Route path="/cafes" component={CafesPage} />
      <StyledContainer>
        <StyledContent>
          <Switch>
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/cart" exact component={CartPage} />
            <Route path="/user" exact component={CustomerPage} />
            <Route path="/qrcode/:id" exact component={ScanQrCodePage} />
            <Route path="/oauth/authorize" exact component={OAuthPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </StyledContent>
      </StyledContainer>
    </Switch>
  </ConnectedRouter>
);

export default RootRouter;
