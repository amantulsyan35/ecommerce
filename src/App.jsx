import './App.css';
import EcommerceStore from './routes/ecommerce-route';
import { UpperNavbar, LowerNavbar, Footer } from './components';

const App = () => {
  return (
    <div className='app'>
      <UpperNavbar />
      <LowerNavbar />
      <EcommerceStore />
      {/*<Footer />*/}
    </div>
  );
};

export default App;
