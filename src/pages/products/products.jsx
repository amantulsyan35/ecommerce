import React from 'react';
import { Link } from 'react-router-dom';
import ProductsHero from './product-components/product-hero/products-hero';
import { ThirdSection, ItemCard } from '../../components/';

import './products.css';

// const ProductFilterCategory = ({ title }) => {
//   return (
//     <div className='filter-category-container'>
//       <h3>Shop For</h3>
//       <div className='filter-category'>
//         Men
//         <span className='filter-cat-num'>12</span>
//       </div>
//       <div className='filter-category'>
//         Men
//         <span className='filter-cat-num'>12</span>
//       </div>
//       <div className='filter-category'>
//         Men
//         <span className='filter-cat-num'>12</span>
//       </div>
//     </div>
//   );
// };

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
              <svg
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8.7593 0.0282519C6.06464 0.234659 3.53995 1.62388 1.91095 3.79657C0.168454 6.12066 -0.417679 9.05272 0.298479 11.8625C1.14667 15.1902 3.81145 17.8547 7.13761 18.7008C10.4154 19.5347 13.8152 18.6006 16.2094 16.2083C18.5975 13.8222 19.5347 10.4113 18.7017 7.1378C17.928 4.09676 15.5978 1.56365 12.6217 0.528162C11.3814 0.0966207 10.0747 -0.0724807 8.7593 0.0282519ZM6.80607 5.78792C6.93111 5.82173 7.15683 6.02959 8.22746 7.09677L9.50021 8.36543L10.773 7.09651C11.9127 5.96025 12.0631 5.823 12.2126 5.78365C12.8337 5.61989 13.3808 6.16703 13.2171 6.78807C13.1777 6.93748 13.0405 7.08793 11.9041 8.22754L10.635 9.50016L11.9041 10.7728C13.0405 11.9124 13.1777 12.0628 13.2171 12.2123C13.3802 12.831 12.8313 13.3798 12.2126 13.2167C12.0631 13.1773 11.9127 13.0401 10.773 11.9038L9.50021 10.6349L8.22746 11.9038C7.08774 13.0401 6.93728 13.1773 6.78786 13.2167C6.16906 13.3798 5.62016 12.831 5.78333 12.2123C5.82269 12.0628 5.95996 11.9124 7.09633 10.7728L8.36536 9.50016L7.09633 8.22754C5.95996 7.08793 5.82269 6.93748 5.78333 6.78807C5.68267 6.4064 5.84524 6.03041 6.18846 5.85112C6.40135 5.73991 6.56616 5.72304 6.80607 5.78792Z'
                  fill='#9D838C'
                />
              </svg>
            </div>
            <div className='selected-filters'>
              <p>Earrings</p>
              <svg
                width='19'
                height='19'
                viewBox='0 0 19 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8.7593 0.0282519C6.06464 0.234659 3.53995 1.62388 1.91095 3.79657C0.168454 6.12066 -0.417679 9.05272 0.298479 11.8625C1.14667 15.1902 3.81145 17.8547 7.13761 18.7008C10.4154 19.5347 13.8152 18.6006 16.2094 16.2083C18.5975 13.8222 19.5347 10.4113 18.7017 7.1378C17.928 4.09676 15.5978 1.56365 12.6217 0.528162C11.3814 0.0966207 10.0747 -0.0724807 8.7593 0.0282519ZM6.80607 5.78792C6.93111 5.82173 7.15683 6.02959 8.22746 7.09677L9.50021 8.36543L10.773 7.09651C11.9127 5.96025 12.0631 5.823 12.2126 5.78365C12.8337 5.61989 13.3808 6.16703 13.2171 6.78807C13.1777 6.93748 13.0405 7.08793 11.9041 8.22754L10.635 9.50016L11.9041 10.7728C13.0405 11.9124 13.1777 12.0628 13.2171 12.2123C13.3802 12.831 12.8313 13.3798 12.2126 13.2167C12.0631 13.1773 11.9127 13.0401 10.773 11.9038L9.50021 10.6349L8.22746 11.9038C7.08774 13.0401 6.93728 13.1773 6.78786 13.2167C6.16906 13.3798 5.62016 12.831 5.78333 12.2123C5.82269 12.0628 5.95996 11.9124 7.09633 10.7728L8.36536 9.50016L7.09633 8.22754C5.95996 7.08793 5.82269 6.93748 5.78333 6.78807C5.68267 6.4064 5.84524 6.03041 6.18846 5.85112C6.40135 5.73991 6.56616 5.72304 6.80607 5.78792Z'
                  fill='#9D838C'
                />
              </svg>
            </div>
          </div>
          <div className='filter-range-container'>
            <h3>Price</h3>
            <input type='range' />
            <p>Range : ₹1000 - ₹67000</p>
          </div>
          <div className='filter-category-container'>
            <h3>Shop For</h3>
            <div className='filter-category'>
              Men
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              Women
              <span className='filter-cat-num'>12</span>
            </div>
          </div>
          <div className='filter-category-container'>
            <h3>Material</h3>

            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/platinum.svg' />
                Platinum
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                Gold
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/diamond.svg' />
                Diamond
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gemstone.svg' />
                Gemstone
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
          </div>
          <div className='filter-category-container'>
            <h3>Weight Ranges</h3>

            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                0-2 g
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                2-7 g
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                8-10 g
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                11-16 g
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
          </div>
          <div className='filter-category-container'>
            <h3>Metal</h3>

            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                18KT Rose
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                18KT Yellow
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                18 KT Two Tone
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
            <div className='filter-category'>
              <div className='filter-category-desc'>
                <img src='/src/assets/products-page/gold_svg.svg' />
                14KT Rose
              </div>
              <span className='filter-cat-num'>12</span>
            </div>
          </div>
        </div>
        <div className='products-items-container'>
          <Link to='/products/4'>
            <ItemCard />
          </Link>
          <Link to='/products/4'>
            <ItemCard />
          </Link>
          <Link to='/products/4'>
            <ItemCard />
          </Link>
          <Link to='/products/4'>
            <ItemCard />
          </Link>
          <Link to='/products/4'>
            <ItemCard />
          </Link>
          <Link to='/products/4'>
            <ItemCard />
          </Link>
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
