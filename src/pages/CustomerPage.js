import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Input from '../components/common/Input';
import Box from '../components/common/Box';
import TitleContainer from '../components/common/TitleContainer';
import { getCustomer } from '../api/customer';
import Meta from '../components/common/Meta';
import { convertTimestampToDate } from '../utils/timeUtils';
import Fallback from '../components/common/Fallback';
import Loader from '../components/common/Loader';
import SubTitle from '../components/common/SubTitle';

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

const Content = styled.div`
  padding: 20px 40px;
`;

const Dates = styled.div`
  color: #692eba;
  font-weight: 300;
`;

const CustomerPage = ({ className }) => {
  const [customer, setCustomer] = useState({ isLoading: true, data: [], isError: false });
  const customerUid = localStorage.getItem('customerUid');

  useEffect(() => {
    getCustomer({ customerUid })
      .then(res => setCustomer({ isLoading: false, data: res, isError: false }))
      .catch(err => {
        console.log(`Get error while getting customer info: ${err}`);
        setCustomer({ isLoading: false, data: [], isError: true });
      });
  }, []);

  return (
    <Fallback isLoading={customer.isLoading} Component={Loader}>
      <div className={className}>
        <TitleContainer>
          <Title>Личный кабинет</Title>
        </TitleContainer>
        {customer.isError ? (
          <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
        ) : (
          <Box>
            <Content>
              <Meta>
                <Title>Имя: {customer.data.name}</Title>
              </Meta>
              <Dates>{convertTimestampToDate(customer.data.birthDate)}</Dates>
            </Content>
          </Box>
        )}
      </div>
    </Fallback>
  );
};

const StyledCustomerPage = styled(CustomerPage)`
  ${Input} {
    min-width: 60%;
  }

  ${SubTitle} {
    color: #ee6b21;
  }
`;

export default withRouter(StyledCustomerPage);
