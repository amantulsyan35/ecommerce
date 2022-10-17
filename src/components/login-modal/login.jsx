import React from 'react';
import './login.css';
import signup from './../../assets/auth-modal/signup.png';
import googleicon from './../../assets/auth-modal/google.png';
import fbicon from './../../assets/auth-modal/fb.png';
import twittericon from './../../assets/auth-modal/twitter.png';

const LoginModal = (props) => {
  const closeLogin = () => {
    props.loginModalhandler(false);
  };
  const donotcloselogin = (e) => {
    e.stopPropagation();
  };
  return (
    <div class='auth_popup_main' onClick={closeLogin}>
      <div class='auth_popup_container' onClick={donotcloselogin}>
        <div class='auth_popup_banner'>
          <img src={signup} alt='' />
        </div>
        <div class='auth_popup_form'>
          <h3>Create an account</h3>
          <form>
            <div class='form_container'>
              <label>Name</label>
              <input type='text' name='' value='' />
            </div>
            <div class='form_container'>
              <label>Email</label>
              <input type='email' name='' value='' />
            </div>
            <div class='form_container'>
              <label>Password</label>
              <input type='password' name='' value='' />
            </div>
            <div class='form_container'>
              <button type='button' name='button'>
                Create Account
              </button>
            </div>
          </form>
          <span>Existing user? Login</span>
          <div class='oauth_container'>
            <div class='oauth_bar'>
              <div class='line'></div>
              <span>OR</span>
              <div class='line'></div>
            </div>
            <div class='oauth_form'>
              <span>Sign up using</span>
              <a href='#'>
                {' '}
                <img src={googleicon} alt='' />{' '}
              </a>
              <a href='#'>
                {' '}
                <img src={fbicon} alt='' />{' '}
              </a>
              <a href='#'>
                {' '}
                <img src={twittericon} alt='' />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
