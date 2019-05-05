import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = ({ className }) => (
  <div className={className}>
    <NavLink to="/cafes/map">Карта</NavLink>
    <NavLink to="/cafes/list">Список кофеен</NavLink>
    {localStorage.getItem('isAuth') !== null ? (
      <div>
        <NavLink to="/orders">Мои заказы</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
      </div>
    ) : null}
  </div>
);

const StyledNavBar = styled(NavBar)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  margin-bottom: 10px;

  div {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
    border-bottom: 3px solid transparent;

    &.active {
      border-bottom: 3px solid #e02a45;
    }
  }

  a + a {
    margin-left: 10px;
  }
`;

export default StyledNavBar;
