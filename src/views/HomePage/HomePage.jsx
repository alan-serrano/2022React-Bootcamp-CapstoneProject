import React from 'react';
import FeaturedProductGrid from '../../components/FeaturedProductGrid/FeaturedProductGrid';
import { FeaturedBannerSlider as FeaturedBannerSliderStyled } from '../../components/FeaturedBannerSlider/styles';
import { CategorySlider as CategorySliderStyled } from '../../components/CategorySlider/styles';
import { FullLayout } from '../../layout';

import categories from '../../mocks/en-us/product-categories.json';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import featuredBannerInfo from '../../mocks/en-us/featured-banners.json';
import { Button as ButtonStyled } from '../../components/Button/styles';
import PropTypes from 'prop-types';

import { createBreakpoint } from 'react-use';

const useBreakpoint = createBreakpoint({
  smartPhone: 320,
  smartPhonePortrait: 480,
  tablet: 768,
  laptop: 980,
  desktop: 1100,
  largeDesktop: 1405,
});

const HomePage = (props) => {
  const { navigateTo, className } = props;
  const breakpoint = useBreakpoint();
  return (
    <FullLayout logoAction={() => navigateTo('homePage')}>
      <div className={className}>
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
            slidesToShow={breakpoint === 'smartPhone' ? 2 : 3}
          />
        </section>

        <section className="featured-products container">
          <h2>Featured Products Grid</h2>
          <FeaturedProductGrid
            featuredProducts={featuredProducts.results}
            gap={2}
          />
          <ButtonStyled onClick={() => navigateTo('productListPage')}>
            View all products
          </ButtonStyled>
        </section>
      </div>
    </FullLayout>
  );
};

HomePage.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default HomePage;
