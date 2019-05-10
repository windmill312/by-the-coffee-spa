import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from '../common/Box';
import Meta from '../common/Meta';
import Description from '../common/Description';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import { getProduct } from '../../api/products';
import Button from '../common/Button';
import StyledContent from '../common/Content';
import StyledContainer from '../common/Container';

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

const ProductInfo = ({
  className,
  addToCart,
  match: {
    params: { productId, cafeId },
  },
}) => {
  const [product, setProduct] = useState({ isLoading: true });

  useEffect(() => {
    getProduct({ productUid: productId }).then(res => setProduct({ isLoading: false, ...res }));
  }, []);

  return (
    <StyledContainer>
      <StyledContent>
        <Fallback isLoading={product.isLoading} Component={Loader}>
          <div className={className}>
            <Box>
              <Meta>
                <Title>Название: {product.name}</Title>
                <Button
                  type="button"
                  onClick={() =>
                    addToCart({
                      productUid: product.productUid,
                      name: product.name,
                      price: product.price,
                      cafeUid: cafeId,
                    })
                  }
                >
                  В корзину
                </Button>
              </Meta>
              <Description>Описание: {product.description}</Description>
              <Price>Группа: {product.productGroup}</Price>
            </Box>
          </div>
        </Fallback>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledProductInfo = styled(ProductInfo)`
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

export default withRouter(StyledProductInfo);
