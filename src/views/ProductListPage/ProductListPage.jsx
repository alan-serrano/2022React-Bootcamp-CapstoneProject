import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';
import { Styled } from './Sidebar';

import ProductGrid from '../../components/ProductGrid';
import { types } from '../../types';
import { useProductCategories, useProducts } from '../../hooks';

const ProductListPage = (props) => {
  const { className } = props;
  const [{ results: productCategories }, categoriesAreLoading] =
    useProductCategories();
  const [productsResponse, productsAreLoading] = useProducts();
  const [filters, setFilters] = useState([]);
  const [
    /**@type {types.productTypes.products}*/
    products,
    setProducts,
  ] = useState(productsResponse.results || []);

  useEffect(
    function filterProducts() {
      if (productsAreLoading) return;
      setProducts((products) => {
        if (filters.length > 0) {
          products = productsResponse.results.filter((product) => {
            let category = product.data.category;
            return filters.includes(category.id);
          });
        } else {
          products = productsResponse.results;
        }

        return products;
      });
    },
    [filters, productsAreLoading],
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
