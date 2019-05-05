import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Input from '../common/Input';
import Box from '../common/Box';
import TitleContainer from '../common/TitleContainer';
import Meta from '../common/Meta';
import { convertTimestampToDate } from '../../utils/timeUtils';
import Container from '../common/Container';
import { getCafe } from '../../api/cafes';
import ProductsList from '../ProductsList/ProductsList';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';

const Title = styled.h1`
  margin: 16px 0 10px 0;
  padding: 0;
  font-weight: 800;
  font-size: 2rem;
  color: #333333;
  @media (max-width: 450px) {
    font-size: 1.25rem;
  }
`;

const SubTitle = styled.h2`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #9c9c9c;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const Dates = styled.div`
  color: #692eba;
  font-weight: 300;
`;

const Price = styled.h1`
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: rgb(240, 106, 58);
  flex-direction: row;
  align-text: right;
`;

const ProductName = styled.div`
  color: #692eba;
  font-weight: 300;
`;

const OrdersPage = ({
  className,
  cafeUid,
  orderUid,
  products,
  totalPrice,
  receiveDttm,
  status,
}) => {
  const [cafe, setCafe] = useState({ isLoading: true });

  useEffect(() => {
    getCafe({ cafeUid }).then(data => setCafe({ isLoading: false, ...data }));
  }, []);

  return (
    <Fallback isLoading={cafe.isLoading} Component={Loader}>
      <div className={className}>
        <TitleContainer>
          <Title>Мои заказы</Title>
        </TitleContainer>
        <Box>
          <Content>
            <Meta>
              <Title>Заказ №: {orderUid.substr(0, 5)}</Title>
            </Meta>
            <ProductName>Кофейня: {cafe.name}</ProductName>
            <Dates>{convertTimestampToDate(receiveDttm)}</Dates>
            <SubTitle>Статус: {status}</SubTitle>
            <Price>Оплачено: {totalPrice}</Price>
            <SubTitle>Товары</SubTitle>
            <Container>
              <ProductsList products={products} cafeUid={cafeUid} />
            </Container>
          </Content>
        </Box>
      </div>
    </Fallback>
  );
};

const StyledOrders = styled(OrdersPage)`
  ${Input} {
    min-width: 60%;
  }
`;

export default withRouter(StyledOrders);
