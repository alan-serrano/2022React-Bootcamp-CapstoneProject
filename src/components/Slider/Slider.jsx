import React, { Children, useEffect, useRef, useState } from 'react';
import { useMeasure } from 'react-use';
import { StylesBaseOnState } from './Slider.styled.state';

/**@param {import('./Slider.types').SliderProps} props*/
const Slider = (props) => {
  // TODO: Fix slidesToScroll greater than 1
  const { className, children, slidesToShow = 1, slidesToScroll = 1 } = props;
  const countSlides = Children.toArray(children).length;
  const [slides, setSlides] = useState([]);
  const [clonedSlides, setClonedSlides] = useState([]);
  const [leftClonedSlides, setLeftClonedSlides] = useState([]);
  const [groupSlides, setGroupSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [ref, { width }] = useMeasure();

  const [slideWidth, setSlideWidth] = useState(null);
  useEffect(
    function setWidthSlides() {
      setSlideWidth(width / slidesToShow);
    },
    [width],
  );

  useEffect(
    function settingGroupSlides() {
      let countGroups = Math.ceil(countSlides / slidesToScroll);
      let groups = Array.from({ length: countGroups }).map((value, index) => {
        return index * slidesToScroll;
      });
      if (countGroups > 0) {
        groups[groups.length - 1] = countSlides - slidesToScroll;
        // Adding cloned slides index
        groups = [
          -leftClonedSlides.length,
          ...groups,
          countGroups + leftClonedSlides.length,
        ];

        let leftGroup = [];

        let offset = Math.floor(leftClonedSlides.length / slidesToScroll);
        for (let i = 0; i < leftClonedSlides.length - slidesToScroll; i++) {
          leftGroup.push(-(i + 1) * offset);
        }

        let rightGroup = [];
        for (let i = 0; i < leftClonedSlides.length - slidesToScroll; i++) {
          rightGroup.push(groups[groups.length - 1] + offset * (i + 1));
        }

        groups = [...leftGroup, ...groups, ...rightGroup];
      }
      setGroupSlides(groups);
    },
    [leftClonedSlides.length],
  );

  const nextSlide = () => {
    let nextIndex = slideIndex + 1;
    setSlideIndex(nextIndex);
    if (nextIndex === countSlides) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    let prevIndex = slideIndex - 1;
    setSlideIndex(prevIndex);
    if (prevIndex < 0) {
      setSlideIndex(countSlides - 1);
    }
  };

  useEffect(getSlides, [slideWidth, clonedSlides.length]);

  function getSlides() {
    const childrens = Children.toArray(children);
    let first = [];
    let last = [];
    let slides = childrens.map((child, i) => {
      if (i < slidesToShow) {
        first.push(cloneSlide(child, { key: `clone-left-${child.key}` }));
      }

      if (i >= countSlides - slidesToShow) {
        last.push(cloneSlide(child, { key: `clone-right-${child.key}` }));
      }

      return cloneSlide(child);
    });

    setSlides([...last, ...slides, ...first]);
    setClonedSlides([...last, ...first]);
    setLeftClonedSlides(last);
  }

  const cloneSlide = (child, additionalProps = {}) => {
    return React.cloneElement(child, {
      ...props,
      ...child.props,
      width: slideWidth,
      slidesToScroll: clonedSlides.length,
      ...additionalProps,
    });
  };

  return (
    <StylesBaseOnState
      {...props}
      className={''}
      state={{
        slideWidth,
        countSlides,
        leftClonedSlides,
        clonedSlides,
        slideIndex,
        groupSlides,
        slidesToScroll,
      }}
    >
      <div className={`wiz-container-slider ${className}`}>
        <div ref={ref} className="content">
          <div className="container-slides">{slides}</div>
        </div>
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
      </div>
    </StylesBaseOnState>
  );
};

export default Slider;
