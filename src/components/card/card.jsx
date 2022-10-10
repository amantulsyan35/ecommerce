import React from 'react';
import './card.css';

export const ItemCard = () => {
  return (
    <div className='products-item-card'>
      <div className='products-item-hero'>
        <img src='/src/assets/products-card/products-item-hero-icon.svg' />
      </div>
      <div className='products-item-cards-rating'>
        <img src='/src/assets/products-card/Star .png' />
        <img src='/src/assets/products-card/Star .png' />
        <img src='/src/assets/products-card/Star .png' />
      </div>
      <p>Gold plated Earring set</p>
      <p>₹2342</p>
      <div className='products-item-card-footer'>
        <button className='cart-button'>ADD TO CART</button>
        <button className='whatsapp-button'>Enquire on whatsapp</button>
      </div>
    </div>
  );
};

export const WishlistItemCard = () => {
  return (
    <div className='wishlist-item-card'>
      <div className='wishlist-image'>1</div>
      <div className='wishlist-details'>
        <div className='wishlist-details-hero'>
          <h3>Celestial Earrings</h3>
          <img src='/src/assets/wishlist/wishlist-close.svg' />
        </div>
        <p>Earrings</p>
        <span>qty</span>
        <div className='wishlist-details-footer'>
          <p>₹2,34,342</p>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
