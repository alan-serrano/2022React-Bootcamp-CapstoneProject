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

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/thumbs/thumbs.scss'; // Pagination module
import './ProductDetailPage.scss'; // Pagination module

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
  return (
    <FullLayout>
      <div className={`${className} container`}>
        <div className="summary">
          <div className="gallery">{productImages()}</div>
          <div className="entry-summary">
            <div>
              <span>{product.data?.name}</span>
            </div>
            <div>
              <span>{product.data?.price}$us</span>
            </div>
            <div>
              <span>{product.data?.sku}</span>
            </div>
            <div>
              <span>{product.data?.category.slug}</span>
            </div>
            <div>
              {product?.tags?.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>
            <div>
              <span>{product.data?.short_description}</span>
            </div>
            <div className="somethin">
              <span>Select items</span>
            </div>
            <div className="somethin">Cart Button.</div>
            <div className="somethin">specs</div>
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

ProductDetailPage.propTypes = {
  className: PropTypes.string,
};

export default ProductDetailPage;
