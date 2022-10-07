import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/homepage';
// import PrivateRoute from './private-route';

const RouteData = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default RouteData;
