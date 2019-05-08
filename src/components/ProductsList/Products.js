import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getProductsByCafe } from '../../api/products';
import Fallback from '../common/Fallback';
import Loader from '../common/Loader';
import ProductsList from './ProductsList';

const Products = ({
  className,
  addToCart,
  match: {
    params: { id },
  },
}) => {
  const [products, setProducts] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getProductsByCafe({ cafeUid: id }).then(res => {
      setProducts({ isLoading: false, data: res.items });
    });
  }, []);

  return (
    <div className={className}>
      <Fallback isLoading={products.isLoading} Component={Loader}>
        <ProductsList addToCart={addToCart} products={products.data} />
      </Fallback>
    </div>
  );
};

export default withRouter(Products);
