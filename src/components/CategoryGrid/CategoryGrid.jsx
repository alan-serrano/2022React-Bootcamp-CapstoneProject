import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import Grid from '../Grid';

/**@type {import('./CategoryGrid.types').CategoryGrid} */
const CategoryGrid = (props) => {
  const { categories } = props;
  return (
    <Grid className="wiz-category-grid">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.data.name}
          imgAlt={category.data.main_image?.alt}
          imgSrc={category.data.main_image.url}
        />
      ))}
    </Grid>
  );
};

CategoryGrid.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryGrid;
