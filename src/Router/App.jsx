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

import 'react-toastify/dist/ReactToastify.css';

import NavbarAfterLogin from '../Components/Sidebar/NavbarAfterLogin';
import PostButton from '../Components/Sidebar/PostButton';
import NavbarProfile from '../Components/Sidebar/NavbarProfile';
import HomeAfterLogin from '../Views/AfterLogin/HomeAfterLogin';
import Upload from '../Components/SidebarBeforeLogin/Upload';

function App() {
  return (
    <div className='App'>
      <ToastContainer/>
    
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

          <Route path = '/navbarAfterLogin' element = {< NavbarAfterLogin />}/>
          <Route path = '/postButtom' element = {< PostButton />}/>
          <Route path = '/navbarProfile' element = {< NavbarProfile />}/>

          <Route path = '/homeAfterLogin' element = {< HomeAfterLogin />}/>
          <Route path = '/upload' element = {< Upload />}/>

          <Route path = '/userAccount' element = {<UserAccount/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
