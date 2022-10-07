import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-link-first'>
          <h3>ABOUT THE SHOP</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className='footer-link-container'>
          <h3>MENU</h3>
          <Link className='footer-link'>Home</Link>
          <Link className='footer-link'>Jewllery</Link>
          <Link className='footer-link'>Ring</Link>
          <Link className='footer-link'>Earring</Link>
          <Link className='footer-link'>Other</Link>
          <Link className='footer-link'>Gifting</Link>
        </div>
        <div className='footer-link-container'>3</div>
        <div className='footer-link-container'>4</div>
      </div>
      <div className='footer-bottom'>y</div>
    </footer>
  );
};

export default Footer;
