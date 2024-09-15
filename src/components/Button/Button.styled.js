import styled from 'styled-components';
import ButtonComponent from './Button';

export const Button = styled(ButtonComponent)``;

export const CartButton = styled(ButtonComponent)`
  text-transform: capitalize;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  margin-right: 18px;
  min-width: 154px;
  font-weight: 500;
  font-size: 16px;
  line-height: 50px;
  display: inline-block;
  background-color: #1f1f1f;
  color: #ffffff;
  padding: 0 37px;
  text-align: center;
  transition: ease 0.3s;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;
