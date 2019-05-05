import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Box from '../common/Box';
import Meta from '../common/Meta';
import Description from '../common/Description';

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

const Product = ({
  className,
  product,
  history,
  match: {
    params: { id },
  },
}) => {
  return (
    <div className={className} role="link">
      <Box onClick={() => history.push(`/cafes/${id}/products/${product.productUid}`)}>
        <Meta>
          <Title>Название: {product.name}</Title>
        </Meta>
        <Description>Описание: {product.description}</Description>
        <Price>Группа: {product.productGroup}</Price>
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

export default withRouter(StyledCafe);
