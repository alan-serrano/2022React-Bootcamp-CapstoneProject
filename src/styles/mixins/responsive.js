import { css } from 'styled-components';

const breakpoints = {
  smartPhone: 320,
  smartPhonePortrait: 480,
  tablet: 768,
  laptop: 980,
  desktop: 1100,
  largeDesktop: 1405,
};

export const responsive = {
  smartPhone: {
    extend: (...args) => css`
      @media (max-width: ${breakpoints.smartPhone}px) {
        ${css(...args)};
      }
    `,
  },
  smartPhonePortrait: {
    extend: (...args) => css`
      @media (min-width: ${breakpoints.smartPhonePortrait}px) {
        ${css(...args)};
      }
    `,
  },
  tablet: {
    extend: (...args) => css`
      @media (min-width: ${breakpoints.tablet}px) {
        ${css(...args)};
      }
    `,
  },
  laptop: {
    extend: (...args) => css`
      @media (min-width: ${breakpoints.laptop}px) {
        ${css(...args)};
      }
    `,
  },
  desktop: {
    extend: (...args) => css`
      @media (min-width: ${breakpoints.desktop}px) {
        ${css(...args)};
      }
    `,
  },
  largeDesktop: {
    extend: (...args) => css`
      @media (min-width: ${breakpoints.largeDesktop}px) {
        ${css(...args)};
      }
    `,
  },
};
