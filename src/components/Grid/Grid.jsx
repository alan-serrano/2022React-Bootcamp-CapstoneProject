import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '../Pagination/styles';

/**@type {import('./Grid.types').Grid} */
const Grid = (props) => {
  const { className, gap = 0, pagination = false } = props;
  return (
    <div className={`wiz-grid ${className}`}>
      <div className="wiz-grid-items-container">{props.children}</div>
      {pagination && <Pagination count={5} />}
    </div>
  );
};

Grid.propTypes = {
  gap: PropTypes.number,
  pagination: PropTypes.bool,
};

export default Grid;
