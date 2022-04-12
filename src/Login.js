import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import { auth } from './firebase';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate('/');
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <img
        className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png'
        alt=''
        onClick={() => {
          navigate('/');
        }}
      />

      <div className='login__container'>
        <h1>Sign In</h1>
        <form action=''>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            type='submit'
            className='login__signInButton'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privary Notive, Our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button className='login__registerButton' onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
