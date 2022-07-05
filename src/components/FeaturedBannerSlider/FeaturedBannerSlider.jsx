import React from 'react';
import { Slider as SliderStyled, Slide as SlideStyled } from '../Slider/styles';
import FeaturedBannerSlide from './FeaturedBannerSlide';

/**@param {import('./FeaturedBannerSlider.types').FeaturedBannerSliderProps} props*/
const FeaturedBannerSlider = (props) => {
  const { featuredBanners } = props;
  return (
    <SliderStyled {...props}>
      {featuredBanners.map((featuredBanner) => (
        <FeaturedBannerSlide
          description={featuredBanner.data.description[0]}
          image={featuredBanner.data.main_image}
          key={featuredBanner.id}
          title={featuredBanner.data.title}
        />
      ))}
    </SliderStyled>
  );
};

export default FeaturedBannerSlider;
