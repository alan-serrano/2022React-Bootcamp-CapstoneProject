import React from 'react';
import PropTypes from 'prop-types';

const GridProduct = (props) => {
  const { imgSrc, imgAlt, title, description } = props;
  return (
    <div className="grid-product">
      <div className="product-img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="produc-meta">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

GridProduct.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default GridProduct;
