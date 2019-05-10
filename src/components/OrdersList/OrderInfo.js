import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Input from '../common/Input';
import Box from '../common/Box';
import Meta from '../common/Meta';
import { convertTimestampToDate } from '../../utils/timeUtils';
import Container from '../common/Container';
import OrderProductsList from './OrderProductsList';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import Title from '../common/Title';
import Separator from '../common/Separator';
import { getOrder } from '../../api/orders';
import { defaultUrl } from '../../api/client';
import { getCafe } from '../../api/cafes';

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

const QRCodeWrapper = styled.div`
  display: column;
`;

const OrderInfo = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [order, setOrder] = useState({ isLoading: true, data: [], isError: false });
  const [cafe, setCafe] = useState({ isLoading: true, data: [], isError: false });

  useEffect(async () => {
    await getOrder({ orderUid: id })
      .then(res => setOrder({ isLoading: false, data: res.data, isError: false }))
      .catch(err => {
        console.log(`Get error while getting order: ${err}`);
        setCafe({ isLoading: false, data: [], isError: true });
      });

    getCafe({ cafeUid: order.data.cafeUid })
      .then(res => setCafe({ isLoading: false, data: res.data, isError: false }))
      .catch(err => {
        console.log(`Get error while getting cafe: ${err}`);
        setCafe({ isLoading: false, data: [], isError: true });
      });
  }, []);

  const qrUrl = `${defaultUrl.FRONT_URL}/qrcode/${order.data.orderUid}`;

  return (
    <Fallback isLoading={order.isLoading || cafe.isLoading} Component={Loader}>
      <div className={className}>
        {order.isError ? (
          <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
        ) : (
          <Box>
            <Content>
              <Meta>
                <SubTitle>
                  Кофейня: {cafe.isError ? 'Информация временно недоступна' : `${cafe.data.name}}`}
                </SubTitle>
                <ProductName>Заказ №: {id.substr(0, 5)}</ProductName>
              </Meta>
              <InfoWrapper>
                <Meta>
                  <Dates>Время создания: {convertTimestampToDate(order.data.createDttm)}</Dates>
                  <Meta>
                    <SubTitle>Статус: </SubTitle>
                    <Status val={order.data.status}>{order.data.status}</Status>
                  </Meta>
                </Meta>
                <Dates>Время получения: {convertTimestampToDate(order.receiveDttm)}</Dates>
              </InfoWrapper>
              <Separator />
              <Price>Оплачено: {order.data.totalPrice}</Price>
              <SubTitle>Товары</SubTitle>
              <Container>
                {cafe.isError ? (
                  <SubTitle>Информация временно недоступна</SubTitle>
                ) : (
                  <OrderProductsList products={order.data.products} cafeUid={order.data.cafeUid} />
                )}
              </Container>
              <QRCodeWrapper>
                <QRCode value={qrUrl} size={256} level="H" />
              </QRCodeWrapper>
            </Content>
          </Box>
        )}
      </div>
    </Fallback>
  );
};

const StyledOrderInfo = styled(OrderInfo)`
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

export default withRouter(StyledOrderInfo);
