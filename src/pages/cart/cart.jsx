import React, { useState } from 'react';
import { WishlistItemCard, RecSection, ItemCard } from '../../components/';
import './cart.css';

const Cart = () => {
  const [cartTab, setCartTab] = useState('cart');
  return (
    <main className='cart'>
      <section className='cart-tab'>
        <p
          onClick={() => setCartTab('cart')}
          className={cartTab === 'cart' ? 'cart-tab-active' : 'cart-tabs'}
        >
          Your Cart
        </p>
        <p
          onClick={() => setCartTab('address')}
          className={cartTab === 'address' ? 'cart-tab-active' : 'cart-tabs'}
        >
          Your Address
        </p>
        <p
          onClick={() => setCartTab('payment')}
          className={cartTab === 'payment' ? 'cart-tab-active' : 'cart-tabs'}
        >
          Your Payment
        </p>
      </section>
      <section className='cart-content'>
        {cartTab === 'cart' && (
          <div className='cart-content-left'>
            <WishlistItemCard />
            <WishlistItemCard />
            <WishlistItemCard />
          </div>
        )}
        {cartTab === 'address' && (
          <div className='cart-content-left'>
            <div className='address-card'>
              <div className='address-header'>
                <p>Saved Address</p>
                <img src='/src/assets/products-card/products-item-hero-icon.svg' />
              </div>
              <p>Delhi 1234, Dwarka Delhi , 110089</p>
            </div>
            <p>Add new+</p>
          </div>
        )}
        {cartTab === 'payment' && (
          <div className='cart-content-left'>
            <h3>Payment method</h3>
            <div className='credit-card'>
              <input type='radio' />
              <p>Pay with Credit Card</p>
            </div>
            <div className='credit-card'>
              <input type='radio' />
              <div className='credit-card-details'>
                <div>
                  <p>Card ***9987</p>
                  <p>HDFC Bank</p>
                </div>
                <span>VISA</span>
              </div>
            </div>
            <div className='credit-card'>
              <input type='radio' />
              <div className='credit-card-details'>
                <div>
                  <p>Card ***9987</p>
                  <p>HDFC Bank</p>
                </div>
                <span>VISA</span>
              </div>
            </div>
            <div className='card-caution'>
              <span>x</span>
              <p>
                We protect your payment information using encryption to provide
                bank-level security.
              </p>
            </div>
            <button className='save-card'>Save Card</button>
          </div>
        )}
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
