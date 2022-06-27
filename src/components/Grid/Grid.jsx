import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => {
  return <div className="wiz-grid">{props.children}</div>;
};

Grid.propTypes = {};

export default Grid;
