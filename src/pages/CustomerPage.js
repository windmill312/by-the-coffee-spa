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
  const [customer, setCustomer] = useState({ isLoading: true });
  const customerUid = localStorage.getItem('customerUid');

  useEffect(() => {
    getCustomer({ customerUid }).then(data => setCustomer({ isLoading: false, ...data }));
  }, []);

  return (
    <Fallback isLoading={customer.isLoading} Component={Loader}>
      <div className={className}>
        <TitleContainer>
          <Title>Личный кабинет</Title>
        </TitleContainer>
        <Box>
          <Content>
            <Meta>
              <Title>Имя: {customer.name}</Title>
            </Meta>
            <Dates>{convertTimestampToDate(customer.birthDate)}</Dates>
          </Content>
        </Box>
      </div>
    </Fallback>
  );
};

const StyledCustomerPage = styled(CustomerPage)`
  ${Input} {
    min-width: 60%;
  }
`;

export default withRouter(StyledCustomerPage);
