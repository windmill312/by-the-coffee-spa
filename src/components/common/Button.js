import styled from 'styled-components';

const StyledButton = styled.button`
  background: rgb(253, 238, 171);
  outline: none;
  color: #9c9c9c;
  height: 47px;
  min-width: 7em;
  border-color: #eee;
  border-radius: 50px;
  padding: 11px 40px;
  margin-top: 20px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid #9c9c9c;
  }
`;

export default StyledButton;
