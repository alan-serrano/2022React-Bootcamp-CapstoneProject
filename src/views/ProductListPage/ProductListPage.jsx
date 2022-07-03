import React from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';

const ProductListPage = (props) => {
  return (
    <FullLayout>
      <h1>This is the Product List Page</h1>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default ProductListPage;
