import React from 'react';
import PropTypes from 'prop-types';
import { Slider as SliderStyled } from '../Slider/styles';
import CategorySlide from './CategorySlide';

/**@param {import('./CategorySlider.types').CategorySliderProps} props*/
const CategoryGrid = (props) => {
  const { categories } = props;
  return (
    <SliderStyled className="wiz-category-grid" {...props}>
      {categories.map((category) => (
        <CategorySlide
          key={category.id}
          title={category.data.name}
          imgAlt={category.data.main_image?.alt}
          imgSrc={category.data.main_image.url}
        />
      ))}
    </SliderStyled>
  );
};

export default CategoryGrid;
