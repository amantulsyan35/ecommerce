import React from 'react';
import Hero from './hero/hero';
import FineJewellery from './fine-jewellery/fine-jewellery';
import ThirdSection from './third-section/third-section';
import FeaturedCollection from './featured-collection/featured-collection';
import BeSpokeDesigns from './be-spoke-design/be-spoke-design';
import Collections from './collections/collections';
import Promises from './promises/promises';
import InstagramShop from './instagram-shop/instagram-shop';
import Newsletter from './newsletter/newsletter';

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
