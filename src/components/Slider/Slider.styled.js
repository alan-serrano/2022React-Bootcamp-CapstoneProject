import styled from 'styled-components';
import SliderComponent from './Slider';

export const Slider = styled(SliderComponent)`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  & .content {
    overflow-x: hidden;
    width: 100%;
  }

  & .container-slides {
    display: flex;
    height: 50px;
  }
`;
