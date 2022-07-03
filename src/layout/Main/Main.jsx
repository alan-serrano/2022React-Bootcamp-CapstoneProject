import React from 'react';
import PropTypes from 'prop-types';

function Main({ header = false, footer = false, className, children }) {
  return <main className={className}>{children}</main>;
}

Main.propTypes = {
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
};

export default Main;
