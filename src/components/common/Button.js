import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  color: rgb(51, 51, 51);
  height: 47px;
  min-width: 7em;
  border: 1px solid #ffdd2d;
  background-color: #ffdd2d;
  border-radius: 10px;
  padding: 11px 40px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  align-items: center;
  &:hover,
  &:focus,
  &:active {
    background: #f3cf55;
  }
`;

export default Button;
