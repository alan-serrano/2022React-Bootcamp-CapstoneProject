import styled from 'styled-components';
import CategorySliderComponent from './CategorySlider';

export const CategorySlider = styled(CategorySliderComponent)`
  & .wiz-slide {
    padding: 8px;
  }

  & img {
    width: 100%;
    object-fit: contain;
  }
`;
