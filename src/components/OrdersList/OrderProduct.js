import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from '../common/Box';
import Meta from '../common/Meta';
import Description from '../common/Description';
import { getProduct } from '../../api/products';
import Loader from '../common/Loader';
import Fallback from '../common/Fallback';

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const Price = styled.h1`
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: rgb(240, 106, 58);
  flex-direction: row;
  align-text: right;
`;

const OrderProduct = ({ className, history, product, cafeUid }) => {
  const [info, setInfo] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getProduct({ productUid: product.productUid }).then(res =>
      setInfo({ isLoading: false, ...res }),
    );
  }, []);

  return (
    <div className={className} role="link">
      <Fallback isLoading={info.isLoading} Component={Loader}>
        <Box onClick={() => history.push(`/cafes/${cafeUid}/products/${product.productUid}`)}>
          <Meta>
            <Title>{info.name}</Title>
          </Meta>
          <Description>{info.description}</Description>
          <Price>Группа: {info.productGroup}</Price>
          <Price>Количество: {product.quantity}</Price>
          <Price>Итог: {product.quantity * info.price}</Price>
        </Box>
      </Fallback>
    </div>
  );
};

const StyledOrderProduct = styled(OrderProduct)`
  ${Box} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;
    padding: 20px 28px;

    ${Description} {
      margin-top: 16px;
    }

    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 450px) {
    ${Meta} {
      flex-direction: column;
    }

    ${Title} {
      font-size: 1.25rem;
      margin-bottom: 10px;
    }
  }
`;

export default withRouter(StyledOrderProduct);
