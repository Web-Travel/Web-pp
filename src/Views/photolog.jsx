import React from 'react';
import NavbarLog from '../Components/SidebarBeforeLogin/NavbarLog';
import Scrolltop from '../Components/Scrolltop';
import photoBg from "../Assets/Image/photos.jpeg"
import PhotoImage from '../Components/Photos/PhotoImage';

function Photoslog() {

    return (
        <>
        {/*==================================== 
        * Navbar and Header 
        ==================================== */}
        <NavbarLog/>
        <div>
            <div
            className='text-center bg-image'
            style={{ backgroundImage: `url(${photoBg})`, height: '500px' }}
            >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <h1 className='mb-3'>Welcome to CamTravel</h1>
                    <h4 className='mb-3'>You can find place with location and description and beautiful photos</h4>
                    {/* search */}
                    
                    {/* searcha */}
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* end header */}

        {/*==================================== 
        * Main
        ==================================== */}
        <PhotoImage/>
        

        {/*==================================== 
        * Scroll top
        ==================================== */}
        <Scrolltop/>
        </>
    );
}

export default Photoslog;

