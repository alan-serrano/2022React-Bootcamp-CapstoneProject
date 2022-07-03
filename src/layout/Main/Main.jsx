import React from 'react';
import PropTypes from 'prop-types';

function Main({ header = false, footer = false, ...props }) {
  return <main {...props}>{props.children}</main>;
}

Main.propTypes = {
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
};

export default Main;
