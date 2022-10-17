import React from 'react';
import './subscribe-modal.css';

const SubscribeModal = () => {
  return (
    <div className='subs_popup_main'>
      <div className='subs_popup_container'>
        <h3>
          Creating experiences <br /> worldwide
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <form>
          <input type='text' name='' value='' placeholder='Enter your email' />
          <button type='button' name='button'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeModal;
