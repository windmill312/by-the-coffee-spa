import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 16px 20px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 8px;
  background-color: rgb(230, 230, 230);
  border-style: none;
  outline: none;
`;

const SearchBar = ({ className, onChange, filter }) => (
  <div className={className}>
    <StyledInput
      placeholder="Поиск названию кофейни"
      value={filter}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

const StyledSearchBar = styled(SearchBar)`
  ${StyledInput} {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default StyledSearchBar;
