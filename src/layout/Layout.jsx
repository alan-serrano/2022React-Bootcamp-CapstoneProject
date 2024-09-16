import React from 'react';
import PropTypes from 'prop-types';
import { Styled as HeaderStyled } from './Header';
import { Styled as FooterStyled } from './Footer';
import { Styled as MainStyled } from './Main';
import { useMeasure } from 'react-use';
const Styled = {
  ...HeaderStyled,
  ...FooterStyled,
  ...MainStyled,
};

function Layout(props) {
  const { header = false, footer = false } = props;
  const [headerRef, { height: headerHeight }] = useMeasure();
  const [footerRef, { height: footerHeight }] = useMeasure();
  return (
    <>
      {header && <Styled.Header id={headerRef} />}
      <Styled.Main
        {...props}
        headerHeight={headerHeight}
        footerHeight={footerHeight}
      >
        {props.children}
      </Styled.Main>
      {footer && <Styled.Footer id={footerRef} />}
    </>
  );
}

Layout.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
};

export default Layout;
