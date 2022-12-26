import './App.css';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Photos from './Components/Photos';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/photos' element={<Photos />}  />
        <Route path='*' element={<ErrorPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
