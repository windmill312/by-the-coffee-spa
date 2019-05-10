import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getProductsByCafe } from '../../api/products';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import ProductsList from './ProductsList';
import SubTitle from '../common/SubTitle';
import StyledContent from '../common/Content';
import StyledContainer from '../common/Container';

const Products = ({
  className,
  addToCart,
  match: {
    params: { id },
  },
}) => {
  const [products, setProducts] = useState({ isLoading: true, data: [], isError: false });

  useEffect(() => {
    getProductsByCafe({ cafeUid: id })
      .then(res => {
        setProducts({ isLoading: false, data: res.items, isError: false });
      })
      .catch(err => {
        console.log(`Get error while getting all orders: ${err}`);
        setProducts({ isLoading: false, data: [], isError: true });
      });
  }, []);

  return (
    <div className={className}>
      <StyledContainer>
        <StyledContent>
          <Fallback isLoading={products.isLoading} Component={Loader}>
            {products.isError ? (
              <SubTitle>Упс, произошла какая-то ошибка! Попробуйте снова познее...</SubTitle>
            ) : (
              <ProductsList addToCart={addToCart} products={products.data} />
            )}
          </Fallback>
        </StyledContent>
      </StyledContainer>
    </div>
  );
};

const StyledProducts = styled(Products)`
  ${SubTitle} {
    color: #ee6b21;
  }
`;

export default withRouter(StyledProducts);
