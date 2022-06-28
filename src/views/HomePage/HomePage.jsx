import React from 'react';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import FeaturedProductGrid from '../../components/FeaturedProductGrid/FeaturedProductGrid';
import { FullLayout } from '../../layout';

import categories from '../../mocks/es-mx/product-categories.json';
import featuredProducts from '../../mocks/es-mx/featured-products.json';

const HomePage = () => {
  return (
    <FullLayout>
      <section className="categories">
        <CategoryGrid categories={categories.results} />
      </section>

      <section className="featured-products">
        <FeaturedProductGrid featuredProducts={featuredProducts.results} />
      </section>
    </FullLayout>
  );
};

export default HomePage;
