import React from 'react';
import './search-overlay.css';

const SearchOverlay = () => {
  return (
    <div className='search-overlay'>
      <div className='search-overlay-recent'>
        <p className='search-overlay-recent-title'>Your Recent Searches</p>
        <p className='search-overlay-recent-p'>HEAVENLY 18 KARAT GOLD</p>
        <p className='search-overlay-recent-p'>HEAVENLY 21 KARAT GOLD</p>
      </div>
      <div className='search-overlay-popular'>
        <p>Popular Products</p>
        <div className='search-overlay-popular-items-container'>
          <div className='search-overlay-popular-items'>
            <div className='search-overlay-picture'>x</div>
            <div className='search-overlay-popular-detail'>
              <p>Sofia brichet</p>
              <p>₹ 7642</p>
            </div>
          </div>
          <div className='search-overlay-popular-items'>
            <div className='search-overlay-picture'>x</div>
            <div className='search-overlay-popular-detail'>
              <p>Sofia brichet</p>
              <p>₹ 7642</p>
            </div>
          </div>
          <div className='search-overlay-popular-items'>
            <div className='search-overlay-picture'>x</div>
            <div className='search-overlay-popular-detail'>
              <p>Sofia brichet</p>
              <p>₹ 7642</p>
            </div>
          </div>
          <div className='search-overlay-popular-items'>
            <div className='search-overlay-picture'>x</div>
            <div className='search-overlay-popular-detail'>
              <p>Sofia brichet</p>
              <p>₹ 7642</p>
            </div>
          </div>
          <div className='search-overlay-popular-items'>
            <div className='search-overlay-picture'>x</div>
            <div className='search-overlay-popular-detail'>
              <p>Sofia brichet</p>
              <p>₹ 7642</p>
            </div>
          </div>
          <div className='search-overlay-popular-items'>
            <div className='search-overlay-picture'>x</div>
            <div className='search-overlay-popular-detail'>
              <p>Sofia brichet</p>
              <p>₹ 7642</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
