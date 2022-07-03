import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../Grid';

/**@param {import('./FeaturedProductSlide.types').FeaturedProductProps} props*/
const FeaturedProductSlide = (props) => {
  const {
    data: {
      mainimage: { url: imgSrc },
    },
    data: {
      mainimage: { url: imgAlt },
    },
    data: { name },
    data: { category },
    price,
  } = props.featuredProduct;
  return (
    <Styled.GridItem>
      <div className="product-img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="produc-meta">
        <div className="title">{name}</div>
        <div className="category">
          <span className="title">{category.slug}</span>
        </div>
        <div className="price">
          <span>{price}</span>
        </div>
      </div>
    </Styled.GridItem>
  );
};

FeaturedProductSlide.propTypes = {
  featuredProduct: PropTypes.object.isRequired,
};

export default FeaturedProductSlide;
