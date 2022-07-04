import React from 'react';
import Layout from './Layout';
import PropTypes from 'prop-types';

const FullLayout = (props) => {
  return (
    <Layout header footer>
      {props.children}
    </Layout>
  );
};

FullLayout.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
};

export default FullLayout;
