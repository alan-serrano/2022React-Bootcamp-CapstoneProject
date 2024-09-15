import { css } from 'styled-components';

export const primaryText = css`
  font-family: 'Jost';
  font-weight: 600;
`;

export const secondaryText = css`
  font-family: 'Jost';
  font-weight: 400;
`;

export const bold = css`
  font-family: 'Jost';
  font-weight: 500;
`;

export const primaryColor = css`
  color: #6ec1e4;
`;

export const secondaryColor = css`
  color: #54595f;
`;

export const accentColor = css`
  color: #54595f;
`;

export const typography = css`
  html {
    ${secondaryText}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${primaryText}
  }
`;
