import styled, { css } from 'styled-components';
import ProductDetailPageComponent from './ProductDetailPage';

// swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/thumbs/thumbs.scss'; // Pagination module
import { responsive } from '../../styles/mixins';

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

  .mySwiper2.mySwiper2 {
    height: 80%;
    width: 100%;
    img {
      object-fit: contain;
      ${responsive.tablet.extend`
        object-fit: cover;
      `}
    }
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
  line-height: 1.5;
  text-align: left;

  ${swipperStyles}

  .summary {
    display: grid;
    grid-template-columns: 100%;

    ${responsive.tablet.extend`
      grid-template-columns: 45% 55%;
    `}
  }

  .gallery {
    max-height: 450px;
    ${responsive.tablet.extend`
      max-height: none;
    `}

    .swiper:first-child {
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
    }
  }

  .entry-summary {
    ${responsive.tablet.extend`
      padding-left: 90px;
    `}
    text-align: left;
  }

  .product_title {
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 13px;
    font-family: 'Jost';
    font-weight: 500;
  }

  .category-top {
    color: #767676;
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  .wiz-product-price {
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: bold;
  }

  .wiz-product-description {
    margin-top: 10px;
    margin-bottom: 15px;
    color: #767676;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 15px;
  }

  .wiz-product-meta {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .sku-wrapper {
    .sku {
      color: #767676;
    }
  }

  .tag {
    color: #767676;
  }

  h4 {
    font-size: 24px;
  }

  .wiz-detail-description {
    p {
      color: #767676;
    }
  }

  ul.spec-wrapper {
    padding-left: 0;
    list-style: none;

    .spec-value {
      color: #767676;
    }
  }
`;
