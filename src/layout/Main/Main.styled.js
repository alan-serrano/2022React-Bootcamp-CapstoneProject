import styled from 'styled-components';
import { minHeightFooter } from '../Footer/Footer.styled';
import { minHeightHeader } from '../Header/Header.styled';
import MainComponent from './Main';

export const Main = styled(MainComponent)`
  min-height: ${(props) => {
    let minHeight = '100vh';
    if (props.header) {
      minHeight += ` - ${minHeightHeader}`;
    }
    if (props.footer) {
      minHeight += ` - ${minHeightFooter}`;
    }
    return `calc(${minHeight})`;
  }};
`;
