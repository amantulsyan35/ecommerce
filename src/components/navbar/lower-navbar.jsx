import React from 'react';
import { NavLink } from 'react-router-dom';
import './low-navbar.css';

const LowerNavbar = () => {
  return (
    <nav className='lower-nav-container'>
      <h2>TAWISA</h2>
      <div className='lower-nav-link-container'>
        <NavLink className='lower-nav-link'>All products</NavLink>
        <NavLink className='lower-nav-link'>Rings</NavLink>
        <NavLink className='lower-nav-link'>Jewellery</NavLink>
        <NavLink className='lower-nav-link'>Blogs</NavLink>
        <NavLink className='lower-nav-link'>Gifting</NavLink>
      </div>
      <div className='lower-nav-input'>
        <input type='text' placeholder='Search For Anything' />
        <img src='/src/assets/search.svg' className='lower-nav-search' />
        <img src='/src/assets/location.svg' />
      </div>
    </nav>
  );
};

export default LowerNavbar;
