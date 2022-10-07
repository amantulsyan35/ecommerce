import React from 'react';
import './fine-jewellery.css';

const FineJewellery = () => {
  return (
    <section className='fine-jewellery'>
      <h2>Welcome to Tawisa - Fine Jewellery</h2>
      <section className='fine-jewellery-collection'>
        <div className='fine-jewellery-left'></div>
        <div className='fine-jewellery-right'>
          <div className='fine-jewellery-flawless'></div>
          <div className='fine-jewellery-lower-right'>
            <div className='fine-jewellery-ethically'></div>
            <div className='fine-jewellery-memorable'></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FineJewellery;
