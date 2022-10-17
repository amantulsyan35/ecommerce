import React from 'react';
import './login.css';

const LoginModal = () => {
  return (
    <div class='auth_popup_main'>
      <div class='auth_popup_container'>
        <div class='auth_popup_banner'>
          <img src='/src/assets/auth-modal/signup.png' alt='' />
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
