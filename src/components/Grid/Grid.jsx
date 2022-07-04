import React from 'react';
import PropTypes from 'prop-types';

/**@type {import('./Grid.types').Grid} */
const Grid = (props) => {
  const { className, gap = 0 } = props;
  return <div className={`wiz-grid ${className}`}>{props.children}</div>;
};

Grid.propTypes = {
  gap: PropTypes.number,
};

export default Grid;
