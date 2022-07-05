import React, { useEffect, useState } from 'react';
import { FullLayout } from '../../layout';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks';
import { types } from '../../types';

const ProductDetailPage = (props) => {
  const { className } = props;
  const { productId } = useParams();
  const [data, isLoading] = useProducts({ id: productId });

  /**
   * @type {[types.productTypes.product, function]} Loading
   */
  const [product, setProduct] = useState({});

  useEffect(
    function settingProduct() {
      if (isLoading) return;
      if (data.results.length > 0) {
        setProduct(data.results[0]);
      }
    },
    [isLoading],
  );
  return (
    <FullLayout>
      <div className={className}>
        {!isLoading && <p>{product.data?.name}</p>}
      </div>
    </FullLayout>
  );
};

ProductDetailPage.propTypes = {
  className: PropTypes.string,
};

export default ProductDetailPage;
