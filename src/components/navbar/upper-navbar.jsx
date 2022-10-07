import React from 'react';
import { NavLink } from 'react-router-dom';
import './upper-navbar.css';

const UpperNavbar = () => {
  return (
    <nav className='upper-nav-container'>
      {/* <img
        src='/src/assets/upper-nav-ribbon.svg'
        className='upper-nav-design'
     />*/}
      <NavLink className='upper-nav-cart'>
        <img src='/src/assets/wishlist.svg' className='upper-nav-cart-icon' />
      </NavLink>
      <NavLink className='upper-nav-cart'>
        <img
          src='/src/assets/shopping_bag.svg'
          className='upper-nav-cart-icon'
        />
      </NavLink>

      <button className='upper-nav-button'>Login/Sign up</button>
    </nav>
  );
};

export default UpperNavbar;
