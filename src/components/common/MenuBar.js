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
  </div>
);

const StyledMenuBar = styled(MenuBar)`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: 30px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #000;
    border-bottom: 3px solid transparent;

    &.active {
      border-bottom: 3px solid #eed121;
    }
  }

  a + a {
    margin-left: 10px;
  }
`;

export default StyledMenuBar;
