import React from 'react';
import './account.css';
import { WishlistItemCard } from '../../components';

const PersonalDetails = () => {
  return (
    <React.Fragment>
      <h3>Personal Information</h3>
      <p>
        This is your account personal information. You can review your
        information and update your details.
      </p>
      <hr />
      <h4>Personal Details</h4>
      <div className='account-profile-image'>
        <div className='profile-image'>
          <img />
        </div>
        <p>Profile Image</p>
      </div>
      <div className='personal-details'>
        <p>Name</p>
        <p>:</p>
        <p>Shelly Roacks</p>
      </div>
      <h4>Contact Details</h4>
      <div className='personal-details'>
        <p>Name</p>
        <p>:</p>
        <p>Shelly Roacks</p>
      </div>
    </React.Fragment>
  );
};

const AddressDetails = () => {
  return (
    <React.Fragment>
      <h3>Your Adresses</h3>
      <p>
        This is your address information. You can review your information and
        update your details.
      </p>
      <hr />
      <h4>Billing Address</h4>
      <div className='account-address-card'>
        <div className='account-address-header'>
          <p>Saved Address</p>
          <img src='/src/assets/wishlist/wishlist-close.svg' />
        </div>
        <p>Delhi 1234, Dwarka Delhi , 110089</p>
      </div>
      <p>Add new +</p>
    </React.Fragment>
  );
};

const OrderHistory = () => {
  return (
    <React.Fragment>
      <h3>Your Adresses</h3>
      <p>
        This is your address information. You can review your information and
        update your details.
      </p>
      <hr />
      <h4>Your Orders</h4>
      <div className='account-order-container'>
        <WishlistItemCard />
        <WishlistItemCard />
        <WishlistItemCard />
      </div>
    </React.Fragment>
  );
};

const TrackOrder = () => {
  return (
    <div className='track-order-container'>
      <h4>Track your order</h4>
      <div className='track-order-id'>
        <p>Order id : #56253df76f</p>
        <p>Product : Celestial Rings</p>
      </div>
    </div>
  );
};

const GiftCards = () => {
  return (
    <React.Fragment>
      <h3>Gift Cards</h3>
      <p>This is your Gifft cards section. You can review your gifts.</p>
      <hr />
      <h4>You dont have any gifts</h4>
    </React.Fragment>
  );
};

const MyAccount = () => {
  return (
    <div className='account'>
      <h2>My Account</h2>
      <div className='account-dashboard'>
        <div className='account-menu-container'>
          <div className='account-menu'>
            <p>Personal Information</p>
            <p>Your Address</p>
            <p>Order History</p>
            <p>Gift Cards</p>
          </div>
        </div>
        <div className='account-details'>
          {/*<PersonalDetails />*/}
          {/*<AddressDetails />/*}
          {/*<OrderHistory />*/}
          {/*<TrackOrder />*/}
          <GiftCards />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
