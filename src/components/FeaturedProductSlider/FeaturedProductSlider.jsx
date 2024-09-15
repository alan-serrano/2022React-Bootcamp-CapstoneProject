import React from 'react';
import PropTypes from 'prop-types';
import FeaturedProductSlide from './FeaturedProductSlide';
import { Slider as SliderStyled } from '../Slider/styles';

/**@param {import('./FeaturedProductSlider.types').FeaturedProductProps} props*/
const FeaturedProductSlider = (props) => {
  const { featuredProducts } = props;
  return (
    <SliderStyled {...props}>
      {featuredProducts.map((featuredProduct) => (
        <FeaturedProductSlide featuredProduct={featuredProduct} />
      ))}
    </SliderStyled>
  );
};

FeaturedProductSlider.propTypes = {
  featuredProducts: PropTypes.array.isRequired,
};

export default FeaturedProductSlider;
