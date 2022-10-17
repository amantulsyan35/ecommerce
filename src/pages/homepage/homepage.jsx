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
} from './homepage-components';
import { ThirdSection } from '../../components';
import { SubscribeModal } from '../../components';

import './homepage.css';

const Homepage = () => {
  return (
    <main>
      <Hero />
      {/*   <SubscribeModal />*/}
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
