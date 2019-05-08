import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import CartTable from './common/CartTable';
import Title from './common/Title';
import TitleContainer from './common/TitleContainer';
import { createOrder } from '../api/orders';
import Input from './common/Input';
import SubTitle from './common/SubTitle';

const { QiwiCheckout } = window;

const AmountText = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin: 30px 0 20px 0;
`;

const Separator = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
`;

const Cart = ({ cartItems, cafeUid, className, history }) => {
  const receiveDt = useRef(null);

  const submit = () => {
    const receiveDttm = new Date(receiveDt.current.value).getTime();
    const customerUid = localStorage.getItem('customerUid');
    const totalPrice = cartItems.reduce((acc, v) => acc + v.price, 0);
    const status = 'CREATED';

    const products = Object.entries(
      cartItems.reduce((acc, v) => {
        acc[v.productUid] = (acc[v.productUid] || 0) + 1;
        return acc;
      }, {}),
    ).map(([productUid, quantity]) => ({ productUid, quantity }));

    QiwiCheckout.createInvoice({
      publicKey:
        '7tXTAb36ZXSTV19PPzWtd2yTH7bGyK4mM3qBr4WCMyzKeJ9iDiVUnwQJBGego8rEKuquoAxjhTQ52XUnKVp822SKEgDX85xsNEhH7F5aANWqfziStGFqt6J8Jb7phi',
      amount: totalPrice,
    });

    // todo добавить условие успешной оплаты
    createOrder({
      customerUid,
      cafeUid,
      products,
      totalPrice,
      receiveDttm,
      status,
    }).then(res => history.push(`/orders/${res.orderUid}`));
  };

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Корзина</Title>
      </TitleContainer>
      {cartItems && cartItems.length ? (
        <React.Fragment>
          <CartTable items={cartItems} />
          <SubTitle>Дата и время получения</SubTitle>
          <Input type="datetime-local" id="start" name="trip-start" ref={receiveDt} />
          <Separator />
          <AmountText>
            К оплате: {cartItems.reduce((acc, v) => acc + v.price, 0)} рублей.
          </AmountText>
          <Button large onClick={receiveDt ? submit : alert('Введите дату и время получения')}>
            Оплатить
          </Button>
        </React.Fragment>
      ) : (
        <AmountText>Ваша корзина пуста.</AmountText>
      )}
    </div>
  );
};

const StyledCart = styled(Cart)`
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
  display: flex;
  flex-direction: column;
`;

export default StyledCart;
