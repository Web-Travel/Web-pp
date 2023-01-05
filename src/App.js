import './App.css';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Home from './Views/Home';
import About from './Views/About';
import Photos from './Views/Photos';
import ErrorPage from './Views/ErrorPage';

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
