import React, { useState } from 'react';
import './collections.css';

const Collections = () => {
  const [currentTab, setCurrentTab] = useState('new-arrived');
  return (
    <section className='collections'>
      <h2>Collections</h2>
      <div className='collections-tab-header'>
        <div
          className={
            currentTab === 'new-arrived'
              ? 'collections-tab-active'
              : 'collections-tab'
          }
          onClick={() => setCurrentTab('new-arrived')}
        >
          <p>New Arrived</p>
        </div>
        <div
          className={
            currentTab === 'on-sale'
              ? 'collections-tab-active'
              : 'collections-tab'
          }
          onClick={() => setCurrentTab('on-sale')}
        >
          <p>On Sale</p>
        </div>
      </div>
      <div className='collections-item-container'>
        <div className='collections-item'>
          <div className='collections-img-1'></div>
          <p>Floral theme rings</p>
          <p className='collections-item-price'>$669</p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
