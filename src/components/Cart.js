import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import CartTable from './common/CartTable';
import Title from './common/Title';
import TitleContainer from './common/TitleContainer';

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

const Cart = ({ cartItems, className }) => (
  <div className={className}>
    <TitleContainer>
      <Title>Корзина</Title>
    </TitleContainer>
    {console.log(cartItems)}
    {cartItems && cartItems.length ? (
      <React.Fragment>
        <CartTable items={cartItems} />
        <Separator />
        <AmountText>К оплате: {cartItems.reduce((acc, v) => acc + v.price, 0)} рублей.</AmountText>
        <Button
          large
          onClick={() =>
            QiwiCheckout.createInvoice({
              publicKey:
                '7tXTAb36ZXSTV19PPzWtd2yTH7bGyK4mM3qBr4WCMyzKeJ9iDiVUnwQJBGego8rEKuquoAxjhTQ52XUnKVp822SKEgDX85xsNEhH7F5aANWqfziStGFqt6J8Jb7phi',
              amount: cartItems.reduce((acc, v) => acc + v.price, 0),
            })
          }
        >
          Оплатить
        </Button>
      </React.Fragment>
    ) : (
      <AmountText>Ваша корзина пуста.</AmountText>
    )}
  </div>
);

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
