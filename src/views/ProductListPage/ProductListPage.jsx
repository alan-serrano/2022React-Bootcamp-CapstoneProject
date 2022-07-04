import React from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';
import { Styled } from './Sidebar';
import categories from '../../mocks/en-us/product-categories.json';
import products from '../../mocks/en-us/products.json';
import ProductGrid from '../../components/ProductGrid';

const ProductListPage = (props) => {
  const { navigateTo, className } = props;
  return (
    <FullLayout logoAction={() => navigateTo('homePage')}>
      <div className={`${className} container`}>
        <Styled.Sidebar categories={categories.results} />
        <div className="content">
          <h2>Products</h2>
          <ProductGrid gap={2} products={products.results} />
        </div>
      </div>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default ProductListPage;
