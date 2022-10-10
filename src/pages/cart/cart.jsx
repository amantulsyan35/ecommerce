import React from 'react';
import { WishlistItemCard, RecSection, ItemCard } from '../../components/';
import './cart.css';

const Cart = () => {
  return (
    <main className='cart'>
      <section className='cart-tab'>
        <p className='cart-tab-active '>Your Cart</p>
        <p className='cart-tabs'>Your Address</p>
        <p className='cart-tabs'>Your Address</p>
      </section>
      <section className='cart-content'>
        <div className='cart-content-left'>
          <WishlistItemCard />
          <WishlistItemCard />
          <WishlistItemCard />
        </div>
        <div className='cart-content-right'>
          <h3>Price Details (3 items)</h3>
          <div className='cart-price-details'>
            <p>Sub Total</p>
            <p>₹7526</p>
          </div>
          <div className='cart-price-details'>
            <p>Sub Total</p>
            <p>₹7526</p>
          </div>
          <div className='cart-price-details'>
            <p>Sub Total</p>
            <p>₹7526</p>
          </div>
          <div className='cart-price-total'>
            <p>Total</p>
            <p>₹7526</p>
          </div>
          <button>Place Order</button>
        </div>
      </section>
      <RecSection>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </RecSection>
    </main>
  );
};

export default Cart;
