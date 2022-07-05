import styled from 'styled-components';
import FeaturedProductSliderComponent from './FeaturedProductSlider';

export const FeaturedProductSlider = styled(FeaturedProductSliderComponent)`
  & .wiz-slide {
    padding: 8px;
  }

  & img {
    width: 100%;
    object-fit: contain;
  }
`;
