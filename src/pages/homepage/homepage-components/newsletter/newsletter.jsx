import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className='newsletter-left'>
        <img src='/src/assets/newsletter/newsletter-icon.png' />
        <h2>Subscribe to our newsletter</h2>
      </div>
      <div className='newsletter-right'>
        <input type='email' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
