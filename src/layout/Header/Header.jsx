import React from 'react';
import { BiShoppingBag, BiSearch } from 'react-icons/bi';
import { ReactComponent as WizelineLogo } from '../../img/wizeline_logo3D.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { className, id: ref } = props;
  return (
    <header className={className} ref={ref}>
      <div className="wrapper">
        <div className="logo-section">
          <Link to={'/home'}>
            <WizelineLogo />
          </Link>
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
  className: PropTypes.string,
  id: PropTypes.func,
};

export default Header;
