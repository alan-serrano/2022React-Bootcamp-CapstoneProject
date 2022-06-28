import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';
import FeaturedProductItem from './FeaturedProductItem';

/**@type {import('./FeaturedProductGrid.types').FeaturedProductGrid} */
const FeaturedProductGrid = (props) => {
  const { featuredProducts } = props;
  return (
    <Grid className="wiz-featured-products-grid">
      {featuredProducts.map((featuredProduct) => (
        <FeaturedProductItem featuredProduct={featuredProduct} />
      ))}
    </Grid>
  );
};

FeaturedProductGrid.propTypes = {
  featuredProducts: PropTypes.array.isRequired,
};

export default FeaturedProductGrid;
