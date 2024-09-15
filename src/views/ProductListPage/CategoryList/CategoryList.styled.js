import styled from 'styled-components';
import CategoryListComponent from './CategoryList';
export const CategoryList = styled(CategoryListComponent)`
  padding: 0;
  & li {
    padding-bottom: 8px;
    padding-top: 8px;
    color: rgb(82, 82, 82);
    list-style: none;
    text-align: left;

    &:first-child {
      padding-top: 0;
    }
  }

  & .name {
    position: relative;
    cursor: pointer;

    &:hover,
    &.selected {
      &::before {
        background-color: #1f1f1f;
      }

      &::after {
        opacity: 1;
      }
    }

    &::before {
      content: '';
      height: 18px;
      width: 18px;
      background-color: #e2e2e2;
      margin: -2px 14px 0 0;
      float: left;
      transition: 0.15s all ease-out;
    }

    &::after {
      transform: rotate(45deg);
      content: '';
      width: 5px;
      height: 9px;
      display: block;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      position: absolute;
      top: 1px;
      left: -26px;
      opacity: 0;
    }
  }
`;
