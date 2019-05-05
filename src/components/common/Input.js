import styled from 'styled-components';

const Input = styled.input`
  border: none;
  font-size: 20px;
  outline: 0px;
  color: inherit;
  padding: 0px 0px 6px;
  border-radius: 0px;
  transition: all 50ms ease 0s;
  border-radius: 0px;
  border-bottom: 1px solid rgb(255, 235, 0);
  &:active,
  &:focus {
    border-bottom: 1px solid #9c9c9c;
  }
`;

export default Input;
