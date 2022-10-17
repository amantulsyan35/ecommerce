import React from 'react';
import './featured-collection.css';

const FeaturedCollection = () => {
  return (
    <section className='featured-collection'>
      <h2>Featured Collections</h2>
      <div className='featured-collection-container'>
        <div className='featured-collection-top'>
          <div className='featured-collection-item-1'>Adorable Beauty</div>
          <div className='featured-collection-item-2'>
            Mesmerizing Collections
          </div>
        </div>
        <div className='featured-collection-bottom'>
          <div className='featured-collection-item-3'>Flawless Collections</div>
          <div className='featured-collection-item-4'>
            Personalized Collections
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
