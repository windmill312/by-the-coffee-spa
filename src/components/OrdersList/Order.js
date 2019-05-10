import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Input from '../common/Input';
import Box from '../common/Box';
import Meta from '../common/Meta';
import { convertTimestampToDate } from '../../utils/timeUtils';
import Container from '../common/Container';
import { getCafe } from '../../api/cafes';
import OrderProductsList from './OrderProductsList';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import Title from '../common/Title';
import Separator from '../common/Separator';

const SubTitle = styled.h2`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #9c9c9c;
`;

const Status = styled.div``;

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
  justify-content: right;
`;

const ProductName = styled.div`
  color: #692eba;
  font-weight: 300;
`;

const InfoWrapper = styled.div`
  display: column;
`;

const Order = ({
  className,
  history,
  cafeUid,
  orderUid,
  products,
  totalPrice,
  createDttm,
  receiveDttm,
  status,
}) => {
  const [cafe, setCafe] = useState({ isLoading: true, data: [], isError: false });

  useEffect(() => {
    getCafe({ cafeUid })
      .then(res => setCafe({ isLoading: false, data: res.data, isError: false }))
      .catch(err => {
        console.log(`Get error while getting cafe: ${err}`);
        setCafe({ isLoading: false, data: [], isError: true });
      });
  }, []);

  return (
    <Fallback isLoading={cafe.isLoading} Component={Loader}>
      <div className={className}>
        <Box onClick={() => history.push(`/orders/${orderUid}`)}>
          <Content>
            <Meta>
              <SubTitle>
                Кофейня: {cafe.isError ? 'Информация временно недоступна' : cafe.data.name}
              </SubTitle>
              <ProductName>Заказ №: {orderUid.substr(0, 5)}</ProductName>
            </Meta>
            <InfoWrapper>
              <Meta>
                <Dates>Время создания: {convertTimestampToDate(createDttm)}</Dates>
                <Meta>
                  <SubTitle>Статус: </SubTitle>
                  <Status val={status}>{status}</Status>
                </Meta>
              </Meta>
              <Dates>Время получения: {convertTimestampToDate(receiveDttm)}</Dates>
            </InfoWrapper>
            <Separator />
            <Price>Оплачено: {totalPrice}</Price>
            <SubTitle>Товары</SubTitle>
            <Container>
              {cafe.isError ? (
                'Информация временно недоступна'
              ) : (
                <OrderProductsList className={className} products={products} cafeUid={cafeUid} />
              )}
            </Container>
          </Content>
        </Box>
      </div>
    </Fallback>
  );
};

const StyledOrder = styled(Order)`
  ${Input} {
    min-width: 60%;
  }

  ${Title} {
    margin: 16px 0 10px 0;
    padding: 0;
    font-weight: 800;
    font-size: 2rem;
    color: #333333;
    @media (max-width: 450px) {
      font-size: 1.25rem;
    }
  }
`;

export default withRouter(StyledOrder);
