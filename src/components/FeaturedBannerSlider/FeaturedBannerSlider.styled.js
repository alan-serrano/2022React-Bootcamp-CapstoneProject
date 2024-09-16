import styled from 'styled-components';
import FeaturedBannerSliderComponent from './FeaturedBannerSlider';

export const FeaturedBannerSlider = styled(FeaturedBannerSliderComponent)`
  & img {
    width: 100%;
    object-fit: contain;
  }
`;
