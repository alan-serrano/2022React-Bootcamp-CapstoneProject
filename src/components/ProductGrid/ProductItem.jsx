import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from '../Grid';
import { BiShoppingBag } from 'react-icons/bi';
import { ButtonLink } from '../ButtonLink/ButtonLink.styled';

/**@param {import('./ProductItem.types').ProductItemProps} props */
const ProductItem = (props) => {
  const { product } = props;
  const { data } = product;
  const { mainimage, short_description, name, category, price } = data;

  return (
    <Styled.GridItem className="wiz-grid-product">
      <div className="product-img">
        <img src={mainimage.url} alt={mainimage.alt} />
      </div>
      <div className="product-meta">
        <div
          className="name"
          style={{ fontWeight: 'bold', marginBottom: '0.5em' }}
        >
          {name}
        </div>
        <div
          className="category"
          style={{ textTransform: 'capitalize', marginBottom: '0.5em' }}
        >
          Category: {category.slug}
        </div>
        <div className="price" style={{ marginBottom: '0.5em' }}>
          {price}$us
        </div>
        <div className="cart" style={{ marginBottom: '0.8em' }}>
          Add to Cart
          <BiShoppingBag
            style={{ marginBottom: '-0.3em', paddingLeft: '0.5em' }}
            size={'1.5em'}
          />
        </div>
        <div className="link">
          <ButtonLink to={`/products/${product.id}`}>Go to Product</ButtonLink>
        </div>
      </div>
    </Styled.GridItem>
  );
};

ProductItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProductItem;
