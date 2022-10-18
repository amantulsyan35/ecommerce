import React from 'react';
import './review-modal.css';

const ReviewModal = () => {
  return (
    <div className='review-modal-main'>
      <div className='review-modal-container'>
        <h1 className='review-modal-heading'>Creating experiences worldwide</h1>
        <input
          className='review-modal-input'
          type='email'
          placeholder='Email Address'
        />
        <input
          className='review-modal-input'
          type='text'
          placeholder='Message'
        />
        <button>Upload</button>
      </div>
    </div>
  );
};

export default ReviewModal;
