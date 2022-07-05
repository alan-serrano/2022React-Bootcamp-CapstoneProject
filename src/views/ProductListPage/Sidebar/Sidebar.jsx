import React from 'react';
import PropTypes from 'prop-types';
import { CategoryList } from '../CategoryList/CategoryList.styled';

const Sidebar = ({ className, categories = [], ...props }) => {
  return (
    <aside className={className}>
      <h2>Category</h2>
      <CategoryList {...props} categories={categories} />
    </aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.array.isRequired,
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

export default Sidebar;
