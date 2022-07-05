import React from 'react';
import PropTypes from 'prop-types';

/**@param {import('./CategoryList.types').CategoryProps} props */
const CategoryList = (props) => {
  const { className, categories, setFilters = () => {}, filters = [] } = props;
  const isActive = (categoryId) => {
    return filters.some((value) => value === categoryId);
  };
  const handleClick = (categoryId) => {
    setFilters((filters) => {
      filters = [...filters];
      let categoryExists = filters.find((value) => value === categoryId);

      if (categoryExists) {
        filters = filters.filter((value) => value !== categoryId);
      } else {
        filters.push(categoryId);
      }

      return filters;
    });
  };
  return (
    <ul className={className}>
      {categories.map((category) => (
        <li key={category.id}>
          <span
            className={`name ${isActive(category.id) ? 'selected' : ''}`}
            onClick={() => handleClick(category.id)}
          >
            {category.data.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

export default CategoryList;
