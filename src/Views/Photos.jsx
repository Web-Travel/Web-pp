
import React from 'react';
import Navbar from "../Components/Navbar"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

{/*--------------------------------------------------------------
  # Photos Page
    -------------------------------------------------------------- */}
function Photos() {
    return (
        <>
        <div>
           <Navbar/>
           {/* start header */}  
            <video className="w-100" autoPlay loop muted >
            <source 
                src="https://mdbootstrap.com/img/video/animation-intro.mp4"
                type="video/mp4"
                allowFullScreen

            />
            </video>
            {/* end header */}
        </div>

        {/* main */}
        <MDBContainer breakpoint='md' className='mt-3'>
        <MDBRow>
            <MDBCol size='md'>
            One of three columns
            </MDBCol>
            <MDBCol size='md'>
            One of three columns
            </MDBCol>
            <MDBCol size='md'>
            One of three columns
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        {/* End main */}


        </>
    );
}

export default Photos;

