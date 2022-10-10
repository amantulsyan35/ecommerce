import React from 'react';
import { WishlistItemCard, ItemCard, RecSection } from '../../components';
import './wishlist.css';

const Wishlist = () => {
  return (
    <section>
      <div className='wishlist'>
        <h2>Your Wishlist</h2>
        <div className='wishlist-item-container'>
          <WishlistItemCard />
          <WishlistItemCard />
          <WishlistItemCard />
        </div>
      </div>
      <RecSection>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </RecSection>
    </section>
  );
};

export default Wishlist;
