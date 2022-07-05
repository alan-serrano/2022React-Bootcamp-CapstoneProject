import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';
import { Styled } from './Sidebar';

import productsJSON from '../../mocks/en-us/products.json';
import ProductGrid from '../../components/ProductGrid';
import { types } from '../../types';
import { useProductCategories } from '../../hooks';

const ProductListPage = (props) => {
  const { className } = props;
  const [{ results: productCategories }, categoriesAreLoading] =
    useProductCategories();
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
    <FullLayout>
      <div className={`${className} container`}>
        {!categoriesAreLoading && (
          <Styled.Sidebar
            categories={productCategories}
            setFilters={setFilters}
            filters={filters}
          />
        )}
        <div className="content">
          <h2>Products</h2>
          <ProductGrid gap={2} products={products} pagination={true} />
        </div>
      </div>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  className: PropTypes.string,
};

export default ProductListPage;
