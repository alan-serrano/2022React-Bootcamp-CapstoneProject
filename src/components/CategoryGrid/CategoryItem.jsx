import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from '../Grid';

const CategoryItem = (props) => {
  const { imgSrc, imgAlt, title, description } = props;
  return (
    <GridItem className="wiz-grid-category">
      <div className="category-img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="category-meta">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </GridItem>
  );
};

CategoryItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CategoryItem;
