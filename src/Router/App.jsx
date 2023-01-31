import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from '../Views/Home';
import About from '../Views/About';
import SiemReap from '../Components/PortfolioHome/SiemReap'
import PhnomPenh from '../Components/PortfolioHome/PhnomPenh';
import Sihanouk from '../Components/PortfolioHome/Sihanouk';
import Kampot from '../Components/PortfolioHome/Kampot';

import Photos from '../Views/Photos';
import Places from '../Views/Places';
import Picture from '../Views/Top-Picture'
import Contact from '../Views/Contact'
import { ToastContainer } from 'react-toastify';
import UserAccount from '../Components/UserAccounts/UserAccounts';

function App() {
  return (
    <div className='App'>
      <ToastContainer theme='colored' limit={2} autoClose={2000} pauseOnHover
        draggable={false}
        pauseOnFocusLoss={false}>
      </ToastContainer>
      <Router>
        <Routes>
          
          <Route path = '/' element = {<Home />}/>
          <Route path = '/about' element = {<About />}/>

          <Route path = '/photos' element = {<Photos />}/>
          <Route path = '/places' element = {<Places />}/>
          <Route path = '/picture' element = {<Picture />}/>
          <Route path = '/contact' element = {<Contact />}/>

          <Route path = '/siemReap' element = {<SiemReap />}/>
          <Route path = '/phnomPenh' element = {<PhnomPenh />}/>
          <Route path = '/sihanouk' element = {<Sihanouk />}/>
          <Route path = '/kampot' element = {<Kampot />}/>

          <Route path = '/userAccount' element = {<UserAccount/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
