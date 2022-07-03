import React from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';

const ProductListPage = (props) => {
  const { navigateTo } = props;
  return (
    <FullLayout logoAction={() => navigateTo('homePage')}>
      <h1>This is the Product List Page</h1>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default ProductListPage;
