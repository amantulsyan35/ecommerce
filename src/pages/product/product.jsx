import React, { useState } from 'react';
import './product.css';
import { ItemCard } from '../../components';

const Product = () => {
  const [selectedTab, setSelectedTab] = useState('description');

  return (
    <section className='product-page'>
      <div className='product-details'>
        <div className='product-details-left'>
          <div className='product-details-small-images'>
            <div className='small-image-preview'>1.1.1</div>
            <div className='small-image-preview'>1.1.1</div>
            <div className='small-image-preview'>1.1.1</div>
            <div className='small-image-preview'>1.1.1</div>
          </div>
          <div className='product-details-images'>1.2</div>
        </div>
        <div className='product-details-right'>
          <p className='nav-info'>
            Home {`>`} Shop {`>`} Earrings {`>`} Product
          </p>
          <div className='product-detail-reviews'>
            <img src='/src/assets/products-card/Star .png' />
            <img src='/src/assets/products-card/Star .png' />
            <img src='/src/assets/products-card/Star .png' />
            <p>| 100 Reviews</p>
          </div>
          <h2 className='product-name'>Celestial Rings</h2>
          <p className='product-price'>₹2,21,342</p>
          <hr />
          <p className='product-desc'>
            Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum
            aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam
            rhoncus. Nunc interdum lacus sit amet orci
          </p>
          <ul>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
          </ul>
          <div className='product-cta'>
            <div className='product-add-btn'>
              <p>-</p>1<p>+</p>
            </div>
            <button>Add To Cart</button>
            <div className='product-wishlist'>
              <img src='/src/assets/products-card/products-item-hero-icon.svg' />
            </div>
          </div>
          <button>Buy It Now</button>
        </div>
      </div>
      <hr />
      <div className='product-tabs-container'>
        <div className='product-tabs'>
          <p
            className={selectedTab === 'description' && 'active-tab'}
            onClick={() => setSelectedTab('description')}
          >
            Description
          </p>
          <p
            className={selectedTab === 'shipping' && 'active-tab'}
            onClick={() => setSelectedTab('shipping')}
          >
            Shipping
          </p>
          <p
            className={selectedTab === 'returns' && 'active-tab'}
            onClick={() => setSelectedTab('returns')}
          >
            Returns
          </p>
        </div>
        <div className='product-tabs-content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Don’t ever play yourself. The weather is amazing, walk with me
            through the pathway of more success. Take this journey with me,
            Lion! The other day the grass was brown, now it’s green because I
            ain’t give up. Never surrender
          </p>
          <ul>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
            <li>Nulla facilisi. Sed mollis, eros et ultrices tempus</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='product-customer-reviews'>
        <h2>Reviews by our customers</h2>
        <div className='review-containers'>
          <div className='reviews'>
            <div className='user-profile-picture'>x</div>
            <div className='user-details'>
              <p>Sofia brichet</p>
              <p>
                The item purchased was as per the image they had. Dimensions
                were also perfect. Looks very authentic. After sales support is
                extremely good too.
              </p>
            </div>
          </div>
          <div className='reviews'>
            <div className='user-profile-picture'>x</div>
            <div className='user-details'>
              <p>Sofia brichet</p>
              <p>
                The item purchased was as per the image they had. Dimensions
                were also perfect. Looks very authentic. After sales support is
                extremely good too.
              </p>
            </div>
          </div>
          <div className='reviews'>
            <div className='user-profile-picture'>x</div>
            <div className='user-details'>
              <p>Sofia brichet</p>
              <p>
                The item purchased was as per the image they had. Dimensions
                were also perfect. Looks very authentic. After sales support is
                extremely good too.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button>Leave a Rating For The Product</button>
        </div>
      </div>
      <div className='prod-rec-section'>
        <h2>You may also like</h2>
        <div className='prod-rec-items'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
};

export default Product;
