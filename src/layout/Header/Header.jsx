import React from 'react';
import { BiShoppingBag, BiSearch } from 'react-icons/bi';
import { ReactComponent as WizelineLogo } from '../../img/wizeline_logo3D.svg';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="wrapper">
        <div className="logo-section">
          <WizelineLogo />
        </div>
        <div className="header-actions">
          <div className="shoping-cart-btn">
            <BiShoppingBag />
          </div>
          <div className="search-button">
            <BiSearch />
          </div>
        </div>
      </div>
    </header>
  );
}
