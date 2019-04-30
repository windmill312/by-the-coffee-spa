import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import userIcon from '../assets/user.png';
import NavBar from './common/NavBar';
import MenuBar from './common/MenuBar';
import CafesListPage from "../pages/CafesListPage";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
  margin-bottom: 10px;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

const UserIcon = styled.div`
  display: inline-block;
  background-image: url(${userIcon});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
`;

const UserWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    margin-bottom: 10px;
    font-size: 0.8rem;
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

const Navbar = styled.div`
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
    <Navbar>
      <Link to="/cafes-map">
        <Title>Кофе на бегу</Title>
      </Link>
      <Switch>
        <Route path="/cafes/:id/" component={MenuBar} />
        <Route path="/cafes-list" component={CafesListPage} />
        <Route component={NavBar} />
      </Switch>
      <UserWrapper>
        <Link to="/user">
          <UserIcon /> Личный кабинет
        </Link>
      </UserWrapper>
    </Navbar>
  </div>
);

const StyledHeader = styled(Header)`
  padding-left: 100px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom; 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px -12px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  background: #e2e2de;
`;

export default StyledHeader;
