import React from 'react';
import { Slide as SlideStyled } from '../Slider/styles';

/**@param {import('./FeaturedBannerSlide.types').FeaturedBannerSlideProps} props*/
const FeaturedBannerSlide = (props) => {
  const { image, description, key, title } = props;
  return (
    <SlideStyled {...props}>
      <h3>{title}</h3>
      <div className="wrapper-img">
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="content">{description.text}</div>
    </SlideStyled>
  );
};

export default FeaturedBannerSlide;
