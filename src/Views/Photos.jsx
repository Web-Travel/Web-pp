import React from 'react';
import Navbar from '../Components/SidebarBeforeLogin/Navbar';
import Scrolltop from '../Components/Scrolltop';
import PhotoImage from '../Components/Photos/PhotoImage';
import photoBg from "../Assets/Image/photos.jpeg"

function Photos() {

    return (
        <>
        {/*==================================== 
        * Navbar and Header 
        ==================================== */}
        <Navbar/>
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

export default Photos;

