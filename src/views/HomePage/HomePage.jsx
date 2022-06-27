import React from 'react';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import { FullLayout } from '../../layout';
import categories from '../../mocks/es-mx/product-categories.json';

const HomePage = () => {
  return (
    <FullLayout>
      <section className="categories">
        <CategoryGrid categories={categories.results} />
      </section>
    </FullLayout>
  );
};

export default HomePage;
