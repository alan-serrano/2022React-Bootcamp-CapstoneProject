import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';
import { typography } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${typography}
  body {
    padding: 0;
    margin: 0;
  }

  .container {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }
`;
