import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ className, count = 5 }) => {
  return (
    <nav>
      <ul className={className}>
        <li className="pagination-item">
          <div className="arrow left" />
        </li>

        {Array.from({ length: count }).map((value, i) => (
          <li className="pagination-item" key={i}>
            {i + 1}
          </li>
        ))}

        <li className="pagination-item">
          <div className="arrow right" />
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Pagination;
