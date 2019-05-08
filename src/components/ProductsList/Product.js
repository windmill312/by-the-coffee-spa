import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Button from '../common/Button';
import Box from '../common/Box';
import Meta from '../common/Meta';
import Description from '../common/Description';

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const InfoWrapper = styled.div`
  display: column;

  ${Button} {
    margin-bottom: 10px;
  }
`;

const Price = styled.h1`
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: rgb(240, 106, 58);
  flex-direction: row;
  align-text: right;
`;

const Group = styled.h1`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #c3c3be;
  flex-direction: row;
  align-text: right;
`;

const Product = ({
  className,
  product,
  history,
  addToCart,
  match: {
    params: { id },
  },
}) => {
  return (
    <div className={className} role="link">
      <Box onClick={() => history.push(`/cafes/${id}/products/${product.productUid}`)}>
        <Meta>
          <Title>{product.name}</Title>
          <InfoWrapper>
            <Group>{product.productGroup}</Group>
            <Price>{product.price.toFixed(2)} руб.</Price>
            <Button
              type="button"
              onClick={() =>
                addToCart({
                  productUid: product.productUid,
                  name: product.name,
                  price: product.price,
                  cafeUid: id,
                })
              }
            >
              В корзину
            </Button>
          </InfoWrapper>
        </Meta>
      </Box>
    </div>
  );
};

const StyledCafe = styled(Product)`
  ${Box} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;
    padding: 0px 28px;
    margin: 0 50px;

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

export default withRouter(StyledCafe);
