import React from 'react';
import { FullLayout } from '../../layout';
import PropTypes from 'prop-types';

const ProductDetailPage = (props) => {
  const { className } = props;
  return (
    <FullLayout>
      <div className={className}></div>
    </FullLayout>
  );
};

ProductDetailPage.propTypes = {
  className: PropTypes.string,
};

export default ProductDetailPage;
