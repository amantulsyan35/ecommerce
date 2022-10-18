import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './low-navbar.css';
import searchicon from './../../assets/search.svg';
import SearchOverlay from '../search-hover/search-overlay';

const LowerNavbar = () => {
  const [isSearchDialog, setIsSearchDialog] = useState(false);
  return (
    <nav
      className='lower-nav-container'
      onMouseLeave={() => setIsSearchDialog(false)}
    >
      <NavLink to='/'>
        <h2>TAWISA</h2>
      </NavLink>
      <div className='lower-nav-link-container'>
        <NavLink to='/products' className='lower-nav-link'>
          All products
        </NavLink>
        <NavLink to='/products/2' className='lower-nav-link'>
          Rings
        </NavLink>
        <NavLink className='lower-nav-link'>Jewellery</NavLink>
        <NavLink className='lower-nav-link'>Blogs</NavLink>
        <NavLink className='lower-nav-link'>Gifting</NavLink>
      </div>
      <div
        className='lower-nav-input'
        onMouseEnter={() => setIsSearchDialog(true)}
      >
        <input type='text' placeholder='Search For Anything' />
        <img src={searchicon} className='lower-nav-search' />
      </div>

      {isSearchDialog && <SearchOverlay />}
    </nav>
  );
};

export default LowerNavbar;
