import React from 'react';
import ProductsHero from './product-components/product-hero/products-hero';
import { ThirdSection, ItemCard } from '../../components/';

import './products.css';

const ProductFilterCategory = () => {
  return (
    <div className='filter-category-container'>
      <h3>Shop For</h3>
      <div className='filter-category'>
        Men
        <span className='filter-cat-num'>12</span>
      </div>
      <div className='filter-category'>
        Men
        <span className='filter-cat-num'>12</span>
      </div>
      <div className='filter-category'>
        Men
        <span className='filter-cat-num'>12</span>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <main>
      <ProductsHero />
      <ThirdSection />
      <div className='products-divide'>
        <p>Showing 1-12 results</p>
        <p>Sort by latest products</p>
      </div>
      <section className='products-container'>
        <div className='products-filter-container'>
          <div className='selected-filters-container'>
            <div className='selected-filters'>
              <p>Earrings</p>
              <img />
            </div>
          </div>
          <div className='filter-range-container'>
            <h3>Price</h3>
            <input type='range' />
            <p>Range : ₹1000 - ₹67000</p>
          </div>
          <ProductFilterCategory />
          <ProductFilterCategory />
          <ProductFilterCategory />
        </div>
        <div className='products-items-container'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </section>
      {/* <div className='products-pagination'>
        <div>1</div>
        <div>2</div>
  <div>3</div>
      </div>*/}
    </main>
  );
};

export default Products;
