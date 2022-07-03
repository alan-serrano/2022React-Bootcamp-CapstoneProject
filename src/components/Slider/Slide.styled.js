import styled from 'styled-components';
import SlideComponent from './Slide';

export const Slide = styled(SlideComponent)`
  background-color: ${({ color }) => color};
  width: ${({ width }) => width}px;
`;
