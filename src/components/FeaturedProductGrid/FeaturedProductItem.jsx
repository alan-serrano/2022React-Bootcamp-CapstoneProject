import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from '../Grid';

/**@type {import('./FeaturedProductItem.types').FeaturedProductItem} */
const FeaturedProductItem = (props) => {
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
    <GridItem>
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
    </GridItem>
  );
};

FeaturedProductItem.propTypes = {
  featuredProduct: PropTypes.object.isRequired,
};

export default FeaturedProductItem;
