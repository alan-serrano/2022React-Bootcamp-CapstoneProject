import React from 'react';
import PropTypes from 'prop-types';
import { Slide as SlideStyled } from '../Slider/styles';

const CategorySlide = (props) => {
  const { imgSrc, imgAlt, title, description } = props;
  return (
    <SlideStyled {...props}>
      <div className="category-img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="category-meta">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </SlideStyled>
  );
};

CategorySlide.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CategorySlide;
