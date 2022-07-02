import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../Grid/styles';
import FeaturedProductItem from './FeaturedProductItem';

/**@type {import('./FeaturedProductGrid.types').FeaturedProductGrid} */
const FeaturedProductGrid = (props) => {
  const { featuredProducts } = props;
  return (
    <Styled.Grid className="wiz-featured-products-grid" {...props}>
      {featuredProducts.map((featuredProduct) => (
        <FeaturedProductItem featuredProduct={featuredProduct} />
      ))}
    </Styled.Grid>
  );
};

export default FeaturedProductGrid;
