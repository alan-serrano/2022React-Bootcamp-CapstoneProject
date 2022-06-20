import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="wrapper">
        <div className="logo-section">Logo</div>
        <div className="header-actions">
          <div className="shoping-cart-btn">btn</div>
          <div className="search-button">btn</div>
        </div>
      </div>
    </header>
  );
}
