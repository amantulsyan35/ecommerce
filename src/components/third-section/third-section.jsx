import React from 'react';
import bracletPath from '../../assets/third-section/braclet.png';
import ringsPath from '../../assets/third-section/rings.png';
import othersPath from '../../assets/third-section/others.png';
import earingsPath from '../../assets/third-section/earings.png';
import necklacesPath from '../../assets/third-section/necklaces.png';
import setsPath from '../../assets/third-section/sets.png';
import './third-section.css';

const ThirdSection = () => {
  return (
    <div className='third-section'>
      {[
        {
          label: 'Braclets',
          imgUrl: bracletPath,
        },
        { label: 'Rings', imgUrl: ringsPath },
        {
          label: 'Earings',
          imgUrl: earingsPath,
        },
        {
          label: 'Necklaces',
          imgUrl: necklacesPath,
        },
        { label: 'Sets ', imgUrl: setsPath },
        {
          label: 'Others',
          imgUrl: othersPath,
        },
      ].map((item, i) => {
        return (
          <div className='third-section-item-container'>
            <div
              className='third-section-item'
              style={{
                backgroundImage: `url(${item?.imgUrl})`,
              }}
              key={i}
            ></div>
            <p>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ThirdSection;
