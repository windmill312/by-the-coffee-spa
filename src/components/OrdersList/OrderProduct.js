import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from '../common/Box';
import Meta from '../common/Meta';
import { getProduct } from '../../api/products';
import Loader from '../common/Loader';
import Fallback from '../common/Fallback';
import SubTitle from '../common/SubTitle';

const Title = styled.div`
  font-weight: 700;
  display: inline;
`;

const Quantity = styled.div`
  display: inline;
  flex-direction: row;
  align-items: center;
  color: #000;
  margin-bottom: 10px;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

const Price = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(240, 106, 58);
  flex-direction: row;
  display: inline;
  margin-left: 50px;
`;

const OrderProduct = ({ className, history, product, cafeUid }) => {
  const [info, setInfo] = useState({ isLoading: true, data: [], isError: false });

  useEffect(() => {
    getProduct({ productUid: product.productUid })
      .then(res => setInfo({ isLoading: false, data: res.data, isError: false }))
      .catch(err => {
        console.log(`Get error while getting product: ${err}`);
        setInfo({ isLoading: false, data: [], isError: true });
      });
  }, []);

  return (
    <div className={className} role="link">
      <Fallback isLoading={info.isLoading} Component={Loader}>
        {info.isError ? (
          <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
        ) : (
          <Box onClick={() => history.push(`/cafes/${cafeUid}/products/${product.productUid}`)}>
            <Title>{info.name}</Title>
            <Quantity>Количество: {product.quantity}</Quantity>
            <Price>Сумма: {(product.quantity * info.price).toFixed(2)}</Price>
          </Box>
        )}
      </Fallback>
    </div>
  );
};

const StyledOrderProduct = styled(OrderProduct)`
  ${Box} {
    display: block;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;
    padding: 20px 28px;
    margin: 0;

    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }

  ${SubTitle} {
    color: #ee6b21;
  }

  @media (max-width: 450px) {
    ${Meta} {
      flex-direction: column;
    }

    ${Title} {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`;

export default withRouter(StyledOrderProduct);
