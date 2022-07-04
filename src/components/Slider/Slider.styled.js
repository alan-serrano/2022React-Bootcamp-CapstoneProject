import styled from 'styled-components';
import SliderComponent from './Slider';

export const Slider = styled(SliderComponent)`
  margin-left: auto;
  margin-right: auto;

  & .content {
    overflow-x: hidden;
    width: 100%;
  }

  & .container-slides {
    display: flex;
  }
`;
