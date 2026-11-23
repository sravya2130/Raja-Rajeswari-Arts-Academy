import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import Gallery from './pages/Gallery';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/services'
          element={<Services />}
        />

        <Route
          path='/about'
          element={<AboutPage />}
        />

        <Route
          path='/gallery'
          element={<Gallery />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;