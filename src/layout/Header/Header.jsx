import React from 'react';
import { BiShoppingBag, BiSearch } from 'react-icons/bi';
import { ReactComponent as WizelineLogo } from '../../img/wizeline_logo3D.svg';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { logoAction, className, id: ref } = props;
  const onLogoClick = (event) => {
    event.preventDefault();
    logoAction();
  };
  return (
    <header className={className} ref={ref}>
      <div className="wrapper">
        <div className="logo-section">
          <a href="#" onClick={onLogoClick}>
            <WizelineLogo />
          </a>
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
};

Header.propTypes = {
  logoAction: PropTypes.func.isRequired,
};

export default Header;
