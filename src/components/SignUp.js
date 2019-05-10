import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { withRouter } from 'react-router';
import Input from './common/Input';
import Box from './common/Box';
import Button from './common/Button';
import { create } from '../api/customer';
import SubTitle from './common/SubTitle';

const Title = styled.h1`
  margin: 16px 0 0 0;
  padding: 0;
  font-weight: 800;
  font-size: 2rem;
  color: #333333;
  @media (max-width: 450px) {
    font-size: 1.25rem;
  }
`;

const DangerSubTitle = styled.h2`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #ee6b21;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

const SignUp = ({ className, history }) => {
  const nameRef = useRef(null);
  const identifierRef = useRef(null);
  const passwordRef = useRef(null);
  const birthDateRef = useRef(null);
  const [isError, setError] = useState(false);

  const submit = () => {
    const name = nameRef.current.value;
    const identifier = identifierRef.current.value;
    const password = passwordRef.current.value;
    const birthDate = moment(birthDateRef.current.value, 'YYYY-MM-DD').valueOf();

    create({
      name,
      identifier,
      password,
      birthDate,
    })
      .then(res => {
        console.log(`Customer successfully signed up: ${res.status}`);
        history.push(`/login`);
      })
      .catch(err => {
        console.log(`Get error while signing up customer: ${err}`);
        setError(true);
      });
  };

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>Регистрация</Title>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Имя</SubTitle>
          <Input ref={nameRef} />

          <SubTitle>Дата рождения</SubTitle>
          <Input
            type="date"
            id="start"
            name="trip-start"
            defaultValue="2019-07-22"
            ref={birthDateRef}
          />

          <SubTitle>Логин</SubTitle>
          <Input ref={identifierRef} />

          <SubTitle>Пароль</SubTitle>
          <Input type="password" ref={passwordRef} />

          <br />
          <Button onClick={submit}>Зарегистрироваться</Button>
          {isError ? <DangerSubTitle>Произошла ошибка, попробуйте познее</DangerSubTitle> : null}
        </Content>
      </Box>
    </div>
  );
};

const StyledCafes = styled(SignUp)`
  ${Input} {
    min-width: 60%;
  }

  ${Button} {
    margin-top: 10px;
  }
`;

export default withRouter(StyledCafes);
