import styled from 'styled-components';
import ProductDetailPageComponent from './ProductDetailPage';
export const ProductDetailPage = styled(ProductDetailPageComponent)`
  padding-left: 5vw;
  padding-right: 5vw;

  padding-top: 36px;

  & .summary {
    display: grid;
    grid-template-columns: 45% 55%;
  }

  & .entry-summary {
    padding-left: 90px;
  }

  & .gallery {
    & .swiper:first-child {
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
    }
  }
`;
