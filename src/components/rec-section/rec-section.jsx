import React from 'react';
import './rec-section.css';

const RecSection = ({ children }) => {
  return (
    <div className='rec-section'>
      <h2>You may also like</h2>
      <div className='rec-items'>{children}</div>
    </div>
  );
};

export default RecSection;
