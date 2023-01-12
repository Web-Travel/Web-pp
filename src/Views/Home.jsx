
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { faAutomobile } from '@fortawesome/free-solid-svg-icons';
import Join from '../Components/LoginSignup/Join';
import FooterDesign from '../Components/FooterDesign';
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import {
  MDBContainer,  MDBCard, MDBCardImage, MDBCardBody, MDBRow,
  MDBCol, MDBRipple, MDBCardTitle, MDBCardText
} from 'mdb-react-ui-kit';

{/*--------------------------------------------------------------
  # Home Page
    -------------------------------------------------------------- */}
export default function App() {

  /** carousel frame item place */
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 470, min: 0 },
      items: 2
    }
  };
  /** End carousel frame item place */

  return (
    <>

    <div fluid>
      {/* call Navbar from components */}
      <Navbar/>
      {/* start header */}  
      <div>
        <div
          className='text-center bg-image'
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2132096/pexels-photo-2132096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '700px' }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Welcome to CamTravel</h1>
                <h4 className='mb-3'>You can find place with location and description and beautiful photos</h4>
                {/* login sign up pop up */}
                <Join/>
                {/* end login sign up pop up */}
              </div>
            </div>
          </div>
        </div>
        {/* end header */}
      </div>

      {/*==================== Start main ================ */}
      <div>
        {/* start place */}
        <MDBContainer>
          <Carousel
          responsive={responsive } >

            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <Link to='/SiemReap'>
                  <div className=' text-center  bg-image' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                      height: '200px' }}
                  > </div>
                </Link>
                </MDBRipple>
                <MDBCardBody>
                  <Link to='/SiemReap'>
                    <MDBCardTitle href='/SiemReap'><h5><span style={{ fontWeight: 'bold' }}>Siem Reap</span></h5></MDBCardTitle>
                  </Link>
                  {/* <MDBCardText><p>Post by <span style={{ fontWeight: 'bold' }}>Phors</span></p></MDBCardText> */}
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3'>
              <MDBCard >
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <Link to='PhnomPenh'>
                  <div className=' text-center bg-image'
                    style={{ 
                      backgroundImage: 
                      "url('https://images.pexels.com/photos/12098898/pexels-photo-12098898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                      height: '200px' }}
                  >
                  </div>
                  </Link>
                </MDBRipple>
                <MDBCardBody>
                    <Link to='PhnomPenh'>
                      <MDBCardTitle><h5><span style={{ fontWeight: 'bold' }}>Phnom Penh</span></h5></MDBCardTitle>
                    </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3'>
              <MDBCard >
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <Link to='Sihanouk'>
                    <div className=' text-center bg-image'
                      style={{ 
                        backgroundImage: 
                        "url('https://images.pexels.com/photos/12001870/pexels-photo-12001870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                        height: '200px' }}
                    >
                    </div>
                  </Link>
                </MDBRipple>
                <MDBCardBody>
                  <Link to='Sihanouk'>
                    <MDBCardTitle><h5><span style={{ fontWeight: 'bold' }}>Preah Sihanouk</span></h5></MDBCardTitle>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3'>
              <MDBCard >
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <Link to='Kampot'>
                    <div className=' text-center bg-image'
                      style={{ 
                        backgroundImage: 
                        "url('https://images.pexels.com/photos/11254951/pexels-photo-11254951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                        height: '200px' }}
                    >
                    </div>
                  </Link>
                </MDBRipple>
                <MDBCardBody>
                  <Link to='Kampot'>
                    <MDBCardTitle><h5><span style={{ fontWeight: 'bold' }}>Kompot</span></h5></MDBCardTitle>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
          </Carousel>
        </MDBContainer> 
        {/* end place =======*/}

        {/* start you next trip... */}
        <MDBContainer>
          <MDBContainer breakpoint='xl' className='mt-3  text-center'>
            <MDBCardTitle>
              <h1><span style={{ fontWeight: 'bold' }}>Your next adventure starts here</span></h1>
            </MDBCardTitle>
            <MDBCardText className='mb-3'>
              <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
                Take a relaxing forest walk, shop Irish Christmas gifts from around the country, cosy up in a local pub and plan your next short break. There's so much to discover in Ireland this winter.
              </p>
            </MDBCardText>
          </MDBContainer>
          <div className='bg-image'
            style={{ 
              backgroundImage: 
              "url('https://images.pexels.com/photos/5984848/pexels-photo-5984848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
              height: '500px' }}
          ></div>
        </MDBContainer>
        {/* end start your next trip... */}

        {/* start The best Trip */}
        <MDBContainer className='mt-5'>
          <MDBCardTitle>
            <h1><span style={{ fontWeight: 'bold' }}>The Best Trip</span></h1>
          </MDBCardTitle>
          
          <MDBRow className='mt-3' start>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ 
                  backgroundImage: 
                  "url('https://images.pexels.com/photos/13452820/pexels-photo-13452820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                  height: '250px' }}
              ></div>
            </MDBCol>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ 
                  backgroundImage: 
                  "url('https://images.pexels.com/photos/8805449/pexels-photo-8805449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                  height: '250px' }}
              ></div>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-3' end>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ 
                  backgroundImage: 
                  "url('https://images.pexels.com/photos/12610510/pexels-photo-12610510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                  height: '250px' }}
              ></div>
            </MDBCol>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ 
                  backgroundImage: 
                  "url('https://images.pexels.com/photos/13771968/pexels-photo-13771968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                  height: '250px'}}
              ></div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* end the best trip */}

        {/* start Photo */}
        <MDBContainer className='mt-5'>
          <MDBCardTitle>
            <h1><span style={{ fontWeight: 'bold' }}>Photo</span></h1>
          </MDBCardTitle>
        </MDBContainer>
        <div>
          <MDBCardBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol className='hover-zoom ' start>
                  <MDBCardImage className='img-fluid rounded' 
                  src='https://images.pexels.com/photos/10259251/pexels-photo-10259251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  
                  style={{height:faAutomobile}} position='top' alt='...' />
                </MDBCol>
                <MDBCol className='hover-zoom' center>
                  <MDBCardImage className='img-fluid rounded mt-5' 
                  src='https://images.pexels.com/photos/12078900/pexels-photo-12078900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  
                  style={{height:faAutomobile}}  position='top' alt='...' />
                </MDBCol> 
                <MDBCol className='hover-zoom' end>
                  <MDBCardImage className='img-fluid rounded' 
                  src='https://images.pexels.com/photos/14589051/pexels-photo-14589051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                  style={{height:faAutomobile}}  position='top' alt='...' />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </div>
        {/* end best trip */}
    
      </div>
      {/*==================== End main ================ */}
      {/* call footer from components */}
      <FooterDesign/>
    </div>
    </>
  );
}