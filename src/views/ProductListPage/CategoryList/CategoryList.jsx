import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/Button/Button.styled';

/**@param {import('./CategoryList.types').CategoryProps} props */
const CategoryList = (props) => {
  const { className, categories, setFilters = () => {}, filters = [] } = props;
  const isActive = (categoryName) => {
    return filters.includes(categoryName.toLowerCase());
  };
  const clearFilters = () => {
    setFilters([]);
  };

  const handleClick = (categoryName) => {
    categoryName = categoryName.toLowerCase();
    setFilters((filters) => {
      filters = [...filters];
      let categoryExists = filters.includes(categoryName);

      if (categoryExists) {
        filters = filters.filter((value) => value !== categoryName);
      } else {
        filters.push(categoryName);
      }

      return filters;
    });
  };
  return (
    <>
      <ul className={className}>
        {categories.map((category) => (
          <li key={category.id}>
            <span
              className={`name ${
                isActive(category.data.name) ? 'selected' : ''
              }`}
              onClick={() => handleClick(category.data.name)}
            >
              {category.data.name}
            </span>
          </li>
        ))}
      </ul>
      {filters.length > 0 && (
        <Button onClick={clearFilters}>Clear Filter</Button>
      )}
    </>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

export default CategoryList;
