import React from 'react';
import { Link } from 'react-router-dom';
import './products-hero.css';

const ProductsHero = () => {
  return (
    <section className='products-hero'>
      <div className='products-hero-navigation'>
        <Link to='#'>Home </Link>
        <p>{`>`}</p>
        <Link to='#'>Shop</Link>
      </div>
      <h1>Shop</h1>
    </section>
  );
};

export default ProductsHero;
