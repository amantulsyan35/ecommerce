import React from 'react';
import {
  Hero,
  FineJewellery,
  ThirdSection,
  FeaturedCollection,
  BeSpokeDesigns,
  Collections,
  Promises,
  InstagramShop,
  Newsletter,
} from './homepage-components';

import './homepage.css';

const Homepage = () => {
  return (
    <main>
      <Hero />
      <FineJewellery />
      <ThirdSection />
      <FeaturedCollection />
      <BeSpokeDesigns />
      <Collections />
      <Promises />
      <InstagramShop />
      <Newsletter />
    </main>
  );
};

export default Homepage;
