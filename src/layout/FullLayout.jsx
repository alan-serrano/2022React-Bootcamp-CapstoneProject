import React from 'react';
import Layout from './Layout';
import PropTypes from 'prop-types';

const FullLayout = (props) => {
  return (
    <Layout header footer logoAction={props.logoAction || (() => {})}>
      {props.children}
    </Layout>
  );
};

FullLayout.propTypes = {
  logoAction: PropTypes.func.isRequired,
};

export default FullLayout;
