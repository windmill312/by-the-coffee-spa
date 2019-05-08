import React from 'react';
import { Route, Switch } from 'react-router';
import SignUp from '../components/SignUp';
import Login from './LoginPage';

const SignUpPage = () => (
  <Switch>
    <Route path="/signup" exact component={SignUp} />
    <Route path="/login" exact component={Login} />
  </Switch>
);

export default SignUpPage;
