import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue(); // [state, dispatch] <- initialState = {basket: []}

  console.log('This is the basket >>> ', basket);

  const addToBasket = () => {
    // dispatch some action item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        cartId: 'id' + new Date().getTime(),
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>

        <p className='prodct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          {new Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt='' />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
