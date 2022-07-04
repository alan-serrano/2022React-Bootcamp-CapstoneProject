import styled from 'styled-components';
import HeaderComponent from './Header';

export const minHeightHeader = '85px';
export const Header = styled(HeaderComponent)`
  display: flex;
  width: 100%;
  min-height: ${minHeightHeader};
  align-content: center;
  box-shadow: 0 0 1px rgb(0 0 0 / 20%);

  & .wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
    width: 100%;
    padding-left: 5vw;
    padding-right: 5vw;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }

  & .header-actions {
    display: flex;
    margin-left: -5px;
    margin-right: -5px;
  }

  & .header-actions > * {
    margin-left: 5px;
    margin-right: 5px;
  }

  & .logo-section {
    width: 50px;
  }
`;
