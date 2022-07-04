import React from 'react';
import PropTypes from 'prop-types';
import { CategoryList } from '../CategoryList/CategoryList.styled';

const Sidebar = ({ className, categories = [] }) => {
  return (
    <aside className={className}>
      <h2>Category</h2>
      <CategoryList categories={categories} />
    </aside>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.array.isRequired,
};

export default Sidebar;
