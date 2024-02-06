import logo from './logo.svg';
import './App.css';
import HeaderImg from './components/HeaderImg';
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftSide from './components/LeftSide';
import MiddlePart from './components/MiddlePart';
import Footer from './components/Footer';
import RightSide from './components/RightSide';
import GoToTop from './components/GoToTop';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/home'} element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
