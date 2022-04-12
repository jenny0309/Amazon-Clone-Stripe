import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, image, price, rating, title, cartId }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch some action item into the data layer
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      cartId: cartId,
    });
  };

  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__imageContainer'>
        <img src={image} alt='' />
      </div>

      <div className='checkoutProduct__rightContainer'>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <div className='checkoutProduct__rating'>
          {new Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
