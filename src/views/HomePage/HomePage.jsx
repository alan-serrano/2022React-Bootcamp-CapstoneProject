import React from 'react';
import FeaturedProductGrid from '../../components/FeaturedProductGrid/FeaturedProductGrid';
import { FeaturedBannerSlider as FeaturedBannerSliderStyled } from '../../components/FeaturedBannerSlider/styles';
import { CategorySlider as CategorySliderStyled } from '../../components/CategorySlider/styles';
import { FullLayout } from '../../layout';

import PropTypes from 'prop-types';

import { createBreakpoint } from 'react-use';
import ButtonLink from '../../components/ButtonLink';
import {
  useFeaturedBanners,
  useFeaturedProducts,
  useProductCategories,
} from '../../hooks';

const useBreakpoint = createBreakpoint({
  smartPhone: 320,
  smartPhonePortrait: 480,
  tablet: 768,
  laptop: 980,
  desktop: 1100,
  largeDesktop: 1405,
});

const HomePage = (props) => {
  const { className } = props;
  const { data: bannersResponse, isLoading } = useFeaturedBanners();
  const [{ results: productCategories }, cateroryIsLoading] =
    useProductCategories();
  const [{ results: featuredProducts }, featuredProductsAreLoading] =
    useFeaturedProducts();
  const breakpoint = useBreakpoint();
  return (
    <FullLayout>
      <div className={className}>
        <section className="featured-banners container">
          <h2>Featured Banners</h2>
          {!isLoading && (
            <FeaturedBannerSliderStyled
              featuredBanners={bannersResponse.results}
              slidesToShow={1}
            />
          )}
        </section>
        <section className="categories container">
          <h2>Product Categories Slider</h2>
          {!cateroryIsLoading && (
            <CategorySliderStyled
              categories={productCategories}
              slidesToShow={breakpoint === 'smartPhone' ? 2 : 3}
            />
          )}
        </section>

        <section className="featured-products container">
          <h2>Featured Products Grid</h2>
          {!featuredProductsAreLoading && (
            <FeaturedProductGrid featuredProducts={featuredProducts} gap={2} />
          )}
          <ButtonLink to={'/products'}>View all products</ButtonLink>
        </section>
      </div>
    </FullLayout>
  );
};

HomePage.propTypes = {
  className: PropTypes.string,
};

export default HomePage;
