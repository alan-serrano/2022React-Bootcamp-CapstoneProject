import styled from 'styled-components';
import FooterComponent from './Footer';

export const minHeightFooter = '85px';
export const Footer = styled(FooterComponent)`
  margin-top: 16px;
  min-height: ${minHeightFooter};
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #1f1f1f;
  color: #ffffff;
  display: flex;
  align-items: center;

  & .content {
    width: 100%;
  }
`;
