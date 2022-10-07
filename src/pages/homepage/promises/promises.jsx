import React from 'react';
import './promises.css';

const Promises = () => {
  return (
    <section className='promises'>
      <div className='promises-img'></div>
      <div className='promises-right'>
        <h2>Tawisa Promises</h2>
        <div className='promises-item'>
          <div className='promises-icon'>
            <img src='/src/assets/promises/Wrench.png' />
          </div>
          <p>Lifetime jewellery maintenance Service</p>
        </div>
        <div className='promises-item'>
          <div className='promises-icon'>
            <img src='/src/assets/promises/Wrench.png' />
          </div>
          <p>Lifetime jewellery maintenance Service</p>
        </div>
        <div className='promises-item'>
          <div className='promises-icon'>
            <img src='/src/assets/promises/Wrench.png' />
          </div>
          <p>Lifetime jewellery maintenance Service</p>
        </div>
      </div>
    </section>
  );
};

export default Promises;
