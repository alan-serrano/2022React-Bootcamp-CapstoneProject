import styled from 'styled-components';
import { footerDimensions } from '../Footer/Footer.styled';
import MainComponent from './Main';

export const Main = styled(MainComponent)`
  min-height: ${({ header, headerHeight, footer, footerHeight }) => {
    let minHeight = '100vh';
    if (header) {
      minHeight += ` - ${headerHeight}px`;
    }
    if (footer) {
      minHeight += ` - ${
        footerHeight +
        footerDimensions.marginTop +
        footerDimensions.paddingBottom +
        footerDimensions.paddingTop
      }px`;
    }
    return `calc(${minHeight})`;
  }};
`;
