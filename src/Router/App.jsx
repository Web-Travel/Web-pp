
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from '../Views/Home';
import About from '../Views/About';
import SiemReap from '../Components/PortfolioHome/SiemReap'
import PhnomPenh from '../Components/PortfolioHome/PhnomPenh';
import Sihanouk from '../Components/PortfolioHome/Sihanouk';
import Kampot from '../Components/PortfolioHome/Kampot';

import Photos from '../Views/Photos';
import Place from '../Views/Places';
import Picture from '../Views/Top-Picture'
import Contact from '../Views/Contact'
import { ToastContainer } from 'react-toastify';

{/*--------------------------------------------------------------
  # Router
    -------------------------------------------------------------- */}
function App() {
  return (
    <div className='App'>
      <ToastContainer theme='colored'></ToastContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>

          <Route path='/photos' element={<Photos />}/>
          <Route path='/place' element={<Place />}/>
          <Route path='/picture' element={<Picture />}/>
          <Route path='/contact' element={<Contact />}/>

          <Route path='/siemReap' element={<SiemReap />}/>
          <Route path='/phnomPenh' element={<PhnomPenh />}/>
          <Route path='/sihanouk' element={<Sihanouk />}/>
          <Route path='/kampot' element={<Kampot />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
