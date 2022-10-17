import React from 'react';
import './logout.css';

const LoginModal = (props) => {
  const closeLogout = () => {
    props.logoutModalHandler(false);
  };

  const donotcloselogout = (e) => {
    e.stopPropagation();
  };

  return (
    <div class='auth_popup_main' onClick={closeLogout}>
      <div class='auth_popup_container' onClick={donotcloselogout}>
        <div class='auth_popup_banner'>
          <img src='/src/assets/auth-modal/login.png' alt='' />
        </div>
        <div class='auth_popup_form'>
          <h3>Have an account? Login in now</h3>
          <form>
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
                <img src='/src/assets/auth-modal/google.png' alt='' />{' '}
              </a>
              <a href='#'>
                {' '}
                <img src='/src/assets/auth-modal/fb.png' alt='' />{' '}
              </a>
              <a href='#'>
                {' '}
                <img src='/src/assets/auth-modal/fb.png' alt='' />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
