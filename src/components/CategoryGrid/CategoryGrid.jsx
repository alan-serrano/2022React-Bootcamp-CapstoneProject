import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import * as Styled from '../Grid/styles';
import Grid from '../Grid';

/**@type {import('./CategoryGrid.types').CategoryGrid} */
const CategoryGrid = (props) => {
  const { categories } = props;
  return (
    <Styled.Grid className="wiz-category-grid" {...props}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.data.name}
          imgAlt={category.data.main_image?.alt}
          imgSrc={category.data.main_image.url}
        />
      ))}
    </Styled.Grid>
  );
};

export default CategoryGrid;
