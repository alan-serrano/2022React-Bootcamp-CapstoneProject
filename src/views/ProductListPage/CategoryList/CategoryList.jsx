import React from 'react';
import PropTypes from 'prop-types';

/**@param {import('./CategoryList.types').CategoryProps} props */
const CategoryList = (props) => {
  const { className, categories } = props;
  return (
    <ul className={className}>
      {categories.map((category) => (
        <li key={category.id}>
          <span className="name">{category.data.name}</span>
        </li>
      ))}
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryList;
