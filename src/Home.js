import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/61o0MTyesqL._SX3000_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='1'
            title='PEDIGREE DENTASTIX Oral Care Dog Treats for Medium Dogs - Original, 12 Sticks'
            image='https://m.media-amazon.com/images/I/81021yz6ZAL._AC_SX679_.jpg'
            price='19.70'
            rating={5}
          />
          <Product
            id='2'
            title='Half Baked Harvest Every Day: Recipes for Balanced, Flexible, Feel-Good Meals: A Cookbook'
            image='https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg'
            price='27.71'
            rating={3}
          />
        </div>

        <div className='home__row'>
          <Product
            id='3'
            title='Lemon Balm and Peppermint Lip Balm - all natural, coldsore prevention, palm oil free, cruelty free, plastic free, moisturising lip balm, handcrafted, organic. - 10ml'
            image='https://m.media-amazon.com/images/I/71Y5dfQnIUL._SY500_.jpg'
            price='9.95'
            rating={4}
          />
          <Product
            id='4'
            title='Shoulder Backpack Urban Travel Crossbody Bag Sling Bag Chest Bag Men Oxford Small Casual Outdoor Travel USB Charging Port - Gray'
            image='https://m.media-amazon.com/images/I/416XZzW7fdL._AC_.jpg'
            price='17.99'
            rating={1}
          />
          <Product
            id='5'
            title="The Half-Orc's Maiden Bride"
            image='https://m.media-amazon.com/images/I/51CKo3O1kSL.jpg'
            price='4.98'
            rating={2}
          />
        </div>

        <div className='home__row'>
          <Product
            id='6'
            title='COSORI Air Fryer 5.8QT Oil Free XL Electric Hot Air Fryers Oven, Programmable 11-in-1 Cooker with Preheat & Shake Reminder, Equipped Digital Touchscreen and Nonstick Basket, 100 Recipes,'
            image='https://m.media-amazon.com/images/I/71+-9CKmeoL._AC_SX679_.jpg'
            price='125.71'
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
