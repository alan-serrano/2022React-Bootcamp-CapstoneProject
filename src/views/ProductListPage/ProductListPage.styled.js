import styled from 'styled-components';
import ProductListPageComponent from './ProductListPage';

export const ProductListPage = styled(ProductListPageComponent)`
  display: grid;
  grid-template-columns: 100%;
  padding-left: 5vw;
  padding-right: 5vw;

  @media (min-width: 768px) {
    grid-template-columns: 25% 75%;
  }

  & h2 {
    text-align: left;
  }
`;
