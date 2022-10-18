import React from 'react';
import {
  Hero,
  FineJewellery,
  FeaturedCollection,
  BeSpokeDesigns,
  Collections,
  Promises,
  InstagramShop,
  Newsletter,
  Testimonials
} from './homepage-components';
import { ThirdSection } from '../../components';

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
      <Testimonials />
      <InstagramShop />
      <Newsletter />
    </main>
  );
};

export default Homepage;
