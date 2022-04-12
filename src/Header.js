import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

// material ui
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <img
        className='header__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt=''
        onClick={() => {
          navigate('/', { replace: false });
        }}
      />

      <form className='header__search' action=''>
        <input className='header__searchInput' type='text' />
        <button>
          <SearchIcon />
        </button>
      </form>

      <div className='header__nav'>
        <div className='header__option' onClick={handleAuthentication}>
          <span className='header__optionLineOne'>Hello Cavin</span>
          <span
            className='header__optionLineTwo'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              !user && navigate('/login', { replace: false });
            }}
          >
            {user ? 'Sign Out' : 'Sign In'}
          </span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <div
          className='header__optionBasket'
          onClick={() => {
            navigate('/checkout');
          }}
        >
          <ShoppingBasketIcon className='header__basket' />
          <span className='header__optionLineTwo header__basketCount'>
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
