import React from 'react';
import FeaturedProductGrid from '../../components/FeaturedProductGrid/FeaturedProductGrid';
import { FeaturedBannerSlider as FeaturedBannerSliderStyled } from '../../components/FeaturedBannerSlider/styles';
import { CategorySlider as CategorySliderStyled } from '../../components/CategorySlider/styles';
import { FullLayout } from '../../layout';

import categories from '../../mocks/en-us/product-categories.json';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import featuredBannerInfo from '../../mocks/en-us/featured-banners.json';

const HomePage = () => {
  return (
    <FullLayout>
      <section className="featured-banners container">
        <h2>Featured Banners</h2>
        <FeaturedBannerSliderStyled
          featuredBanners={featuredBannerInfo.results}
          slidesToShow={1}
        />
      </section>
      <section className="categories container">
        <h2>Product Categories Slider</h2>
        <CategorySliderStyled
          categories={categories.results}
          slidesToShow={3}
        />
      </section>

      <section className="featured-products container">
        <h2>Featured Products Grid</h2>
        <FeaturedProductGrid
          featuredProducts={featuredProducts.results}
          gap={2}
        />
      </section>
    </FullLayout>
  );
};

export default HomePage;
