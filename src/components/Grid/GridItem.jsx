import React from 'react';
import PropTypes from 'prop-types';

const GridItem = (props) => {
  return <div className="wiz-grid-item">{props.children}</div>;
};

GridItem.propTypes = {};

export default GridItem;
