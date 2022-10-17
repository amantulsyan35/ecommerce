import React, { useEffect, useState } from 'react';
import './hero.css';
import { SubscribeModal } from '../../../../components/';
import LoginModal from '../../../../components/login-modal/login';

const Hero = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  useEffect(() => {
    setIsSubscribe(true);
  }, []);

  return (
    <section className='homepage-hero-section' onClick={(e) => handleModal}>
      {isSubscribe && <SubscribeModal setIsSubscribe={setIsSubscribe} />}

      <h1>
        Discover a world of
        <br /> Finest Jewellery
      </h1>
      <button>Explore Collections</button>
    </section>
  );
};

export default Hero;
