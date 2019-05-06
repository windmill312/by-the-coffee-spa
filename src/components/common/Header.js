import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import userIcon from '../../assets/user.png';
import NavBar from './NavBar';
import MenuBar from './MenuBar';
import logoPng from '../../assets/coffee.png';

const UserIcon = styled.div`
  display: inline-block;
  background-image: url(${userIcon});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
`;

const LogoIcon = styled.div`
  height: 50px;
  width: 50px;
  display: inline-block;
  background: url("${logoPng}") no-repeat center;
  background-size: contain;
`;

const UserWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
  ${UserIcon} {
    margin-right: 8px;
  }
`;

const LogoWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
  ${LogoIcon} {
    margin-right: 10px;
  }
`;

const SwitchWrapper = styled.div`
  margin-top: 10px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
    ${UserWrapper} {
      margin: 10px 0;
    }
`;

const Header = ({ className }) => (
  <div className={className}>
    <Nav>
      <LogoWrapper>
        <Link to="/cafes/map">
          <LogoIcon /> Кофе на бегу
        </Link>
      </LogoWrapper>
      <SwitchWrapper>
        <Switch>
          <Route path="/cafes/:id/" strict component={MenuBar} />
          <Route component={NavBar} />
        </Switch>
      </SwitchWrapper>
      <UserWrapper>
        {localStorage.getItem('isAuth') !== null ? (
          <Link to="/user">
            <UserIcon /> Личный кабинет
          </Link>
        ) : (
          <Link to="/login">
            <UserIcon /> Войти
          </Link>
        )}
      </UserWrapper>
    </Nav>
  </div>
);

const StyledHeader = styled(Header)`
  padding-left: 100px;
  padding-right: 30px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px -12px rgba(0, 0, 0, 0.3);
  background-color: #dfdfdf;
`;

export default StyledHeader;
