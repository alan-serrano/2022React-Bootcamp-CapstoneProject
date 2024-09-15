import styled from 'styled-components';
import FooterComponent from './Footer';

export const footerDimensions = {
  paddingTop: 20,
  paddingBottom: 20,
  marginTop: 16,
};

export const Footer = styled(FooterComponent)`
  margin-top: ${footerDimensions.marginTop}px;
  min-height: 85px;
  padding-top: ${footerDimensions.paddingTop}px;
  padding-bottom: ${footerDimensions.paddingBottom}px;
  background-color: #1f1f1f;
  color: #ffffff;
  display: flex;
  align-items: center;

  & .content {
    width: 100%;
  }
`;
