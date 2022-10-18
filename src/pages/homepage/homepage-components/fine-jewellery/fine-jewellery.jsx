import React from 'react';
import './fine-jewellery.css';

const FineJewellery = () => {
  return (
    <section className='fine-jewellery'>
      <h2>Welcome to Tawisa - Fine Jewellery</h2>
      <section className=' fine-jewellery-collection'>
        <div className='fine-jewellery-card fine-jewellery-left'>
          <p>New Arrivals</p>
        </div>
        <div className='fine-jewellery-right'>
          <div className='fine-jewellery-card  fine-jewellery-flawless'>
            <p>Flawless Collections</p>
          </div>
          <div className=' fine-jewellery-lower-right'>
            <div className='fine-jewellery-card  fine-jewellery-ethically'>
              <p>Styled Ethically</p>
            </div>
            <div className='fine-jewellery-card fine-jewellery-memorable'>
              <p>Memorable </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FineJewellery;
