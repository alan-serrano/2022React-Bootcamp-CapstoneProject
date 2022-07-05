import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../Grid';

/**@param {import('./ProductItem.types').ProductItemProps} props */
const ProductItem = (props) => {
  const { product } = props;
  const { data } = product;
  const { mainimage, short_description } = data;
  return (
    <Styled.GridItem className="wiz-grid-product">
      <div className="product-img">
        <img src={mainimage.url} alt={mainimage.alt} />
      </div>
      <div className="product-meta">
        <div className="category">{}</div>
        <div className="description">{short_description}</div>
      </div>
    </Styled.GridItem>
  );
};

ProductItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProductItem;
