import styled, { css } from 'styled-components';
import ProductDetailPageComponent from './ProductDetailPage';

// swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/thumbs/thumbs.scss'; // Pagination module

const swipperStyles = css`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDetailPage = styled(ProductDetailPageComponent)`
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 36px;

  ${swipperStyles}

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

  & .product_title {
    font-size: 28px;
  }
`;
