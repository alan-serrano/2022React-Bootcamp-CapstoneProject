import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';
import { Styled } from './Sidebar';
import categories from '../../mocks/en-us/product-categories.json';
import productsJSON from '../../mocks/en-us/products.json';
import ProductGrid from '../../components/ProductGrid';
import { types } from '../../types';

const ProductListPage = (props) => {
  const { navigateTo, className } = props;
  const [filters, setFilters] = useState([]);
  const [
    /**@type {types.productTypes.products}*/
    products,
    setProducts,
  ] = useState(productsJSON.results);

  useEffect(
    function filterProducts() {
      setProducts((products) => {
        if (filters.length > 0) {
          products = productsJSON.results.filter((product) => {
            let category = product.data.category;
            return filters.includes(category.id);
          });
        } else {
          products = productsJSON.results;
        }

        return products;
      });
    },
    [filters],
  );

  return (
    <FullLayout logoAction={() => navigateTo('homePage')}>
      <div className={`${className} container`}>
        <Styled.Sidebar
          categories={categories.results}
          setFilters={setFilters}
          filters={filters}
        />
        <div className="content">
          <h2>Products</h2>
          <ProductGrid gap={2} products={products} />
        </div>
      </div>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default ProductListPage;
