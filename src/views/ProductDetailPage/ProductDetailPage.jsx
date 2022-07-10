import React, { useEffect, useState } from 'react';
import { FullLayout } from '../../layout';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks';
import { types } from '../../types';

// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Thumbs } from 'swiper';
import { CartButton } from '../../components/Button/Button.styled';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

// install Swiper modules
const ProductDetailPage = (props) => {
  const { className } = props;
  const { productId } = useParams();
  const [data, isLoading] = useProducts({ id: productId });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  /**
   * @type {[types.productTypes.product, function]} Loading
   */
  const [product, setProduct] = useState({});

  useEffect(
    function settingProduct() {
      if (isLoading) return;
      if (data.results.length > 0) {
        setProduct(data.results[0]);
      }
    },
    [isLoading],
  );

  const productImages = () => {
    if (!product.data?.images) return;

    let images = product.data.images;

    const slides = images.map(({ image }) => (
      <>
        <SwiperSlide key={image.url}>
          <img src={image.url} />
        </SwiperSlide>
      </>
    ));

    const slidesClone = images.map(({ image }) => (
      <>
        <SwiperSlide key={`clone-${image.url}`}>
          <img src={image.url} />
        </SwiperSlide>
      </>
    ));

    return (
      <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {slides}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {slidesClone}
        </Swiper>
      </>
    );
  };

  const productTags = () => {
    return product?.tags?.map((tag, i, tags) => {
      if (i != tags.length - 1) {
        tag = tag + ', ';
      }
      return <span className="tag">{tag}</span>;
    });
  };

  const productSpecs = () => {
    let specsList = product?.data?.specs.map((spec) => {
      return (
        <li key={spec.spec_name}>
          <span className="spec-name">{spec.spec_name}: </span>
          <span className="spec-value">{spec.spec_value}</span>
        </li>
      );
    });

    return <ul className="spec-wrapper">{specsList}</ul>;
  };

  return (
    <FullLayout>
      <div className={`${className} container`}>
        <div className="summary">
          <div className="gallery">{productImages()}</div>
          <div className="entry-summary">
            <div className="category-top">
              <span>{product.data?.category.slug}</span>
            </div>
            <h1 className="product_title">{product.data?.name}</h1>
            <div className="wiz-product-price">
              <span>{product.data?.price}$us</span>
            </div>
            <div className="wiz-product-description">
              <span>{product.data?.short_description}</span>
            </div>
            <div className="cart-product">
              <CartButton>Add to Cart</CartButton>
              <input
                type="number"
                style={{ width: '35px', height: '45px' }}
                name=""
                id=""
                value={0}
              />
            </div>
            <div className="wiz-product-meta">
              <div className="sku-wrapper">
                <span className="label">SKU: </span>
                <span className="sku">{product.data?.sku}</span>
              </div>
              <div className="tags-wrapper">
                <span className="label">Tags: </span>
                {productTags()}
              </div>
            </div>
          </div>
        </div>
        <div className="wiz-detail-description">
          <h4>Detailed description</h4>
          <p>{product?.data?.description[0]?.text}</p>
          <div className="wiz-product-specs">{productSpecs()}</div>
        </div>
      </div>
    </FullLayout>
  );
};

ProductDetailPage.propTypes = {
  className: PropTypes.string,
};

export default ProductDetailPage;
