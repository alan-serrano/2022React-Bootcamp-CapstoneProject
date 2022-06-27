import React from 'react';
import PropTypes from 'prop-types';
import GridProduct from './GridProduct';

/**@type {import('./CategoryGrid.types').CategoryGrid} */
const CategoryGrid = (props) => {
  const { categories } = props;
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <GridProduct
          key={category.id}
          title={category.data.name}
          imgAlt={category.data.main_image?.alt}
          imgSrc={category.data.main_image.url}
        />
      ))}
    </div>
  );
};

CategoryGrid.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryGrid;
