import React, { useState } from 'react';
import CartClose from '../../assets/wishlist/wishlist-close.svg';
import './card.css';

export const ItemCard = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className='products-item-card'>
      <div className='products-item-hero'>
        <svg
          width='20'
          height='18'
          viewBox='0 0 20 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => setIsWishlisted((state) => !state)}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.92494 0.0254068C3.68002 0.181735 2.63853 0.693454 1.75408 1.58349C0.962792 2.37974 0.48619 3.22408 0.209237 4.32041C-0.271701 6.22416 0.0779869 8.09873 1.2424 9.85869C1.98904 10.9872 2.95189 12.0229 4.72283 13.6026C5.84935 14.6075 9.28271 17.5365 9.44939 17.6349C9.60642 17.7276 9.66478 17.7386 9.99627 17.7386C10.3276 17.7386 10.3862 17.7275 10.5431 17.6351C10.7103 17.5365 14.1514 14.6006 15.2697 13.6023C17.0455 12.0172 18.0045 10.9856 18.7501 9.85869C19.9146 8.09873 20.2642 6.22416 19.7833 4.32041C19.5063 3.22408 19.0297 2.37974 18.2385 1.58349C17.4499 0.790016 16.6058 0.332125 15.4991 0.0976333C14.9464 -0.0195151 13.9226 -0.0297495 13.4358 0.0769302C12.0871 0.372633 11.05 1.04916 10.1037 2.25068L9.99627 2.38709L9.88885 2.25068C8.959 1.07006 7.93771 0.39361 6.63689 0.0967349C6.24861 0.00814117 5.35814 -0.0289682 4.92494 0.0254068ZM6.23139 1.21713C7.3383 1.41013 8.29642 2.05271 9.05342 3.10974C9.1842 3.29236 9.34291 3.51377 9.40607 3.60177C9.69689 4.00693 10.2956 4.00693 10.5865 3.60177C10.6496 3.51377 10.8083 3.29236 10.9391 3.10974C11.9739 1.66486 13.4141 0.984196 14.9837 1.1983C16.7262 1.43599 18.0869 2.6574 18.6064 4.45021C19.017 5.8674 18.8359 7.35545 18.0896 8.69568C17.4644 9.81853 16.4219 10.9928 14.6056 12.6199C13.7261 13.4079 10.0312 16.5862 9.99467 16.5863C9.95889 16.5863 6.27764 13.4173 5.38689 12.6196C2.59404 10.1186 1.49166 8.55634 1.22615 6.72302C1.05467 5.53908 1.30185 4.26412 1.89678 3.264C2.79689 1.7508 4.54849 0.923649 6.23139 1.21713Z'
            fill={isWishlisted ? 'red' : 'black'}
          />
        </svg>
      </div>
      <div className='products-item-cards-rating'>
        <img src='/src/assets/products-card/Star .png' />
        <img src='/src/assets/products-card/Star .png' />
        <img src='/src/assets/products-card/Star .png' />
        <img src='/src/assets/gray_star.png' />
        <img src='/src/assets/gray_star.png' />
      </div>
      <p>Gold plated Earring set</p>
      <p>???2342</p>
      <div className='products-item-card-footer'>
        <button className='cart-button'>
          ADD TO CART
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.8229 3.7876H1.55752C1.24961 3.7876 1 4.03721 1 4.34512V13.2654C1 13.5733 1.24961 13.8229 1.55752 13.8229H13.8229C14.1308 13.8229 14.3804 13.5733 14.3804 13.2654V4.34512C14.3804 4.03721 14.1308 3.7876 13.8229 3.7876Z'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M4.90234 6.01766V3.78759C4.90234 3.04828 5.19604 2.33924 5.71881 1.81647C6.24158 1.29369 6.95062 1 7.68993 1C8.42925 1 9.13828 1.29369 9.66106 1.81647C10.1838 2.33924 10.4775 3.04828 10.4775 3.78759V6.01766'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
        <button className='whatsapp-button'>
          Enquire on whatsapp
          <img src='/src/assets/products-card/whatsapp-icon.svg' />
        </button>
      </div>
    </div>
  );
};

export const WishlistItemCard = () => {
  return (
    <div className='wishlist-item-card'>
      <div className='wishlist-image'>1</div>
      <div className='wishlist-details'>
        <div className='wishlist-details-hero'>
          <h3>Celestial Earrings</h3>
          <img src={CartClose} />
        </div>
        <p>Earrings</p>
        <span>qty</span>
        <div className='wishlist-details-footer'>
          <p>???2,34,342</p>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
