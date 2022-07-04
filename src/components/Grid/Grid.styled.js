import styled from 'styled-components';
import GridComponent from './Grid';
import { GridItem } from './GridItem.styled';

export const Grid = styled(GridComponent)`
  & .wiz-grid-items-container {
    display: flex;
    gap: ${setGap};
    flex-wrap: wrap;
  }

  & ${GridItem} {
    width: calc(50% - ${setGap});

    @media (min-width: 479px) {
      width: calc(33% - ${setGap});
    }
  }

  & img {
    max-width: 100%;
  }
`;

function setGap(props) {
  let gap = getGap(props);
  return `${gap}px`;
}

function getGap(props) {
  let baseGap = 8;
  let gap = props.gap;
  return gap * baseGap;
}
