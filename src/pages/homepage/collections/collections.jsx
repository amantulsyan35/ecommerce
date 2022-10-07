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
        >
          <p>New Arrived</p>
        </div>
        <div
          className={
            currentTab === 'on-sale'
              ? 'collections-tab-active'
              : 'collections-tab'
          }
        >
          <p>On Sale</p>
        </div>
      </div>
      <div className='collections-item-container'>
        <div className='collections-item'>
          <div className='collections-img'></div>
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img'></div>
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img'></div>
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img'></div>
          <p>name</p>
          <p>x</p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
