import React from 'react';

/**@param {import('./Slide.types').SlideProps} props */
const Slide = (props) => {
  const { className, children } = props;
  return <div className={`wiz-slide ${className}`}>{children}</div>;
};

export default Slide;
