import styled from 'styled-components';

const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

export const StylesBaseOnState = styled.div`
  & .container-slides {
    width: ${({ state }) => {
      const { slideWidth, countSlides, clonedSlides } = state;
      let width = slideWidth * (countSlides + clonedSlides.length);
      return width + 'px';
    }};

    transform: ${({ state }) => {
      const {
        slideWidth,
        leftClonedSlides,
        slideIndex,
        groupSlides,
        slidesToScroll,
      } = state;
      const initial = -slideWidth * leftClonedSlides.length;
      let offset = leftClonedSlides.length - slidesToScroll;
      return `translateX(${
        initial - slideWidth * groupSlides[slideIndex + offset + 1]
      }px)`;
    }};

    transition: ${({ state }) => {
      // TODO: Add transition
      const { slideIndex } = state;
      if (slideIndex == 1) {
        return null;
      } else {
        return null;
      }
    }};
  }
`;
