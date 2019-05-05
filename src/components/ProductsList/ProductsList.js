import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductsList = ({ className, products, cafeUid }) => (
  <div className={className}>
    {products.map(product => (
      <Product product={product} cafeUid={cafeUid} key={product.productUid} />
    ))}
  </div>
);

const StyledProductsList = styled(ProductsList)`
  margin-top: 20px;
`;

export default StyledProductsList;
