import './App.css';
import EcommerceStore from './routes/ecommerce-route';
import { UpperNavbar, LowerNavbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <UpperNavbar />
      <LowerNavbar />
      <EcommerceStore />
    </div>
  );
};

export default App;
