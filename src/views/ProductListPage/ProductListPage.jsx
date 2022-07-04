import React from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';
import { Styled } from './Sidebar';
import categories from '../../mocks/en-us/product-categories.json';

const ProductListPage = (props) => {
  const { navigateTo, className } = props;
  return (
    <FullLayout logoAction={() => navigateTo('homePage')}>
      <div className={`${className} container`}>
        <Styled.Sidebar categories={categories.results} />
        <div className="content">
          <h1>This is the Product List Page</h1>
        </div>
      </div>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default ProductListPage;
