import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBar = ({
  className,
  match: {
    params: { id },
  },
}) => (
  <div className={className}>
    <NavLink to={`/cafes/${id}/`} exact>
      Описание
    </NavLink>
    <NavLink to={`/cafes/${id}/products`}>Товары</NavLink>
    <NavLink to={`/events/${id}/partners`}>Партнеры</NavLink>
    <NavLink to={`/events/${id}/history`}>История</NavLink>
  </div>
);

const StyledMenuBar = styled(MenuBar)`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: 30px;

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

export default StyledMenuBar;
