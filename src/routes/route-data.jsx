import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/homepage';
import { Products } from '../pages/products';
import Product from '../pages/product/product';
import Wishlist from '../pages/wishlist/wishlist';
import Cart from '../pages/cart/cart';
import MyAccount from '../pages/account/account';
// import PrivateRoute from './private-route';

const RouteData = () => {
  return (
    <Routes>
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/products/:product' element={<Product />} />
      <Route path='/products' element={<Products />} />
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default RouteData;
