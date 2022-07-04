import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import * as Styled from '../Grid/styles';

/**@param {import('./ProductGrid.types').ProductGridProps} props*/
const ProductGrid = (props) => {
  const { products } = props;
  return (
    <Styled.Grid className="wiz-category-grid" {...props}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Styled.Grid>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array,
  gap: PropTypes.number,
  pagination: PropTypes.bool,
};

export default ProductGrid;
