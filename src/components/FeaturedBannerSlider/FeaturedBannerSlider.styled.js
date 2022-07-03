import styled from 'styled-components';
import FeaturedBannerSliderComponent from './FeaturedBannerSlider';

export const FeaturedBannerSlider = styled(FeaturedBannerSliderComponent)`
  & .wiz-slide {
    padding: 8px;
  }

  & img {
    width: 100%;
    object-fit: contain;
  }
`;
