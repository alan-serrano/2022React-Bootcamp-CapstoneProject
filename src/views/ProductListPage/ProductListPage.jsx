import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '../../layout';
import { Styled } from './Sidebar';

import ProductGrid from '../../components/ProductGrid';
import { types } from '../../types';
import { useProductCategories, useProducts } from '../../hooks';
import { useSearchParams } from 'react-router-dom';

const ProductListPage = (props) => {
  const { className } = props;
  const [{ results: productCategories }, categoriesAreLoading] =
    useProductCategories();
  const [productsResponse, productsAreLoading] = useProducts();
  let [searchParams, setSearchParams] = useSearchParams();
  let categoryFilter = searchParams.get('category');
  const [filters, setFilters] = useState([]);
  const [
    /**@type {types.productTypes.products}*/
    products,
    setProducts,
  ] = useState(productsResponse.results || []);

  useEffect(
    function initialCategoryFilter() {
      if (categoryFilter) {
        setFilters((filters) => {
          filters = [...filters, categoryFilter.toLowerCase()];
          return filters;
        });
      }
    },
    [categoryFilter],
  );

  useEffect(
    function filterProducts() {
      if (productsAreLoading) return;
      if (categoryFilter && !filters.includes(categoryFilter.toLowerCase)) {
        searchParams.delete('category');
        setSearchParams(searchParams);
      }
      setProducts((products) => {
        if (filters.length > 0) {
          products = productsResponse.results.filter((product) => {
            let category = product.data.category;
            return filters.includes(category.slug);
          });
        } else {
          products = productsResponse.results;
        }

        return products;
      });
    },
    [filters, productsAreLoading, categoryFilter],
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
          {!productsAreLoading && products.length > 0 && (
            <ProductGrid gap={2} products={products} pagination={true} />
          )}
        </div>
      </div>
    </FullLayout>
  );
};

ProductListPage.propTypes = {
  className: PropTypes.string,
};

export default ProductListPage;
