import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './upper-navbar.css';
import LoginModal from '../login-modal/login';
import LogoutModal from '../logout-modal/logout';
import carticon from './../../assets/shopping_bag.svg';
import wishlisticon from './../../assets/wishlist.svg';

const UpperNavbar = () => {
  const wrapperRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDialog, setIsDialog] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  // useEffect(() => {
  //   /**
  //    * Alert if clicked on outside of element
  //    */
  //   function handleClickOutside(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       event.stopPropogation();
  //       alert('hii');
  //     }
  //   }
  //   // Bind the event listener
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [wrapperRef]);

  return (
    <nav ref={wrapperRef} className='upper-nav-container'>
      {/* <img
        src='/src/assets/upper-nav-ribbon.svg'
        className='upper-nav-design'
     />*/}
      <NavLink to='/wishlist' className='upper-nav-cart'>
        <img src={wishlisticon} className='upper-nav-cart-icon' />
      </NavLink>
      <NavLink to='/cart' className='upper-nav-cart'>
        <img src={carticon} className='upper-nav-cart-icon' />
      </NavLink>

      {!isLoggedIn ? (
        <button
          className='upper-nav-button'
          onMouseEnter={() => setIsDialog(true)}
        >
          Login/Sign up
        </button>
      ) : (
        <div className='upper-nav-profile'>
          <p>Sofia brichet</p>
          <div className='upper-nav-profile-picture'>x</div>
        </div>
      )}
      <div
        onMouseLeave={() => setIsDialog(false)}
        className={isDialog ? 'nav-hover-dialog' : 'nav-hover-dialog-hidden'}
      >
        <p>Login / Sign up to access your account</p>
        <div className='nav-dialog-buttons'>
          <button
            onClick={() => setLoginModal(true)}
            className='nav-dialog-login'
          >
            LOGIN
          </button>
          <button
            onClick={() => setLogoutModal(true)}
            className='nav-dialog-signup'
          >
            SIGN UP
          </button>
        </div>
        <div className='nav-dialog-footer'>
          <p className='nav-dialog-issues'>Having issues?</p>
          <p className='nav-dialog-contact'>Contact Us</p>
        </div>
      </div>
      {loginModal && <LoginModal loginModalhandler={setLoginModal} />}
      {logoutModal && <LogoutModal logoutModalHandler={setLogoutModal} />}
    </nav>
  );
};

export default UpperNavbar;
