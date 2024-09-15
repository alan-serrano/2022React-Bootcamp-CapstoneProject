import { css } from 'styled-components';

import robotoRegularWoff from '../fonts/Roboto/roboto-v30-latin-regular.woff';
import robotoRegularWoff2 from '../fonts/Roboto/roboto-v30-latin-regular.woff2';
import robotoRegularItalicWoff from '../fonts/Roboto/roboto-v30-latin-italic.woff';
import robotoRegularItalicWoff2 from '../fonts/Roboto/roboto-v30-latin-italic.woff2';
import robotoBoldWoff from '../fonts/Roboto/roboto-v30-latin-700.woff';
import robotoBoldWoff2 from '../fonts/Roboto/roboto-v30-latin-700.woff2';
import robotoBoldItalicWoff from '../fonts/Roboto/roboto-v30-latin-700italic.woff';
import robotoBoldItalicWoff2 from '../fonts/Roboto/roboto-v30-latin-700italic.woff';

import monserratRegularWoff from '../fonts/Monserrat/montserrat-v24-latin-regular.woff';
import monserratRegularWoff2 from '../fonts/Monserrat/montserrat-v24-latin-regular.woff2';

import monserratBoldWoff from '../fonts/Monserrat/montserrat-v24-latin-700.woff';
import monserratBoldWoff2 from '../fonts/Monserrat/montserrat-v24-latin-700.woff2';

export const fonts = css`
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''), url(${robotoRegularWoff2}) format('woff2'),
      url(${robotoRegularWoff}) format('woff');
  }
  /* roboto-italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: local(''), url(${robotoRegularItalicWoff}) format('woff2'),
      url(${robotoRegularItalicWoff2}) format('woff');
  }
  /* roboto-700italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src: local(''), url(${robotoBoldItalicWoff}) format('woff2'),
      url(${robotoBoldItalicWoff2}) format('woff');
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''), url(${robotoBoldWoff2}) format('woff2'),
      url(${robotoBoldWoff}) format('woff');
  }

  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''), url(${monserratRegularWoff2}) format('woff2'),
      url(${monserratRegularWoff}) format('woff');
  }

  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''), url(${monserratBoldWoff2}) format('woff2'),
      url(${monserratBoldWoff}) format('woff');
  }
`;
