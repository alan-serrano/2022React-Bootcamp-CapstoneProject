import React from 'react';

const GridItem = (props) => {
  const { className } = props;
  return <div className={`wiz-grid-item ${className}`}>{props.children}</div>;
};

GridItem.propTypes = {};

export default GridItem;
