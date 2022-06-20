import React from 'react';
import PropTypes from 'prop-types';
import { Styled as HeaderStyled } from './Header';
import { Styled as FooterStyled } from './Footer';
import { Styled as MainStyled } from './Main';
const Styled = {
  ...HeaderStyled,
  ...FooterStyled,
  ...MainStyled,
};

function Layout(props) {
  const { header = false, footer = false } = props;
  return (
    <>
      {header && <Styled.Header />}
      <Styled.Main {...props}>{props.children}</Styled.Main>
      {footer && <Styled.Footer />}
    </>
  );
}

Layout.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
};

export default Layout;
