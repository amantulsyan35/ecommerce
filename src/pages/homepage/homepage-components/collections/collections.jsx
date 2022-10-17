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
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img-2'></div>
          <p>name</p>
          <p>y</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img-3'></div>
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img-4'></div>
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img-5'></div>
          <p>name</p>
          <p>x</p>
        </div>
        <div className='collections-item'>
          <div className='collections-img-6'></div>
          <p>name</p>
          <p>x</p>
        </div>
      </div>
    </section>
  );
};

export default Collections;
