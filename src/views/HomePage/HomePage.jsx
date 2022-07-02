import React from 'react';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import FeaturedProductGrid from '../../components/FeaturedProductGrid/FeaturedProductGrid';
import { FullLayout } from '../../layout';

import categories from '../../mocks/es-mx/product-categories.json';
import featuredProducts from '../../mocks/es-mx/featured-products.json';

const HomePage = () => {
  return (
    <FullLayout>
      <section className="categories container">
        <CategoryGrid categories={categories.results} gap={2} />
      </section>

      <section className="featured-products container">
        <FeaturedProductGrid
          featuredProducts={featuredProducts.results}
          gap={2}
        />
      </section>
    </FullLayout>
  );
};

export default HomePage;
