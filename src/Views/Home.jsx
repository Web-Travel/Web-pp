import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { faAutomobile } from '@fortawesome/free-solid-svg-icons';
import Join from '../Components/LoginSignup/Join';
import FooterDesign from '../Components/FooterDesign';
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import homeBg from "../Assets/Image/home.jpeg"
import {
  MDBContainer,  MDBCard, MDBCardImage, MDBCardBody, MDBRow,
  MDBCol, MDBRipple, MDBCardTitle, MDBCardText, MDBInput, MDBCheckbox, MDBBtn, MDBIcon
} from 'mdb-react-ui-kit';
import Scrolltop from "../Components/Scrolltop";

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
      {/*==================================== 
      * Header 
      ==================================== */}
      <div>
        <div
          className='text-center bg-image'
          style={{ backgroundImage: `url(${homeBg})`, height: '700px' }}
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
      </div>
      {/* end header */}

      {/*==================================== 
      * Start main 
      ==================================== */}
      <div>
        {/*==================================== 
        * start place
        ==================================== */}
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
                    <MDBCardTitle href='/SiemReap'><h6><span style={{ fontWeight: 'bold' }}>Siem Reap</span></h6></MDBCardTitle>
                  </Link>
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
                      <MDBCardTitle><h6><span style={{ fontWeight: 'bold' }}>Phnom Penh</span></h6></MDBCardTitle>
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
                    <MDBCardTitle><h6><span style={{ fontWeight: 'bold' }}>Preah Sihanouk</span></h6></MDBCardTitle>
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
                    <MDBCardTitle><h6><span style={{ fontWeight: 'bold' }}>Kompot</span></h6></MDBCardTitle>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
          </Carousel>
        </MDBContainer> 
        {/* end place =======*/}


        {/*==================================== 
        * start you next trip...
        ==================================== */}
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


        {/*==================================== 
        * start Photo
        ==================================== */}
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
                <MDBCol className='hover-zoom' start>
                  <MDBCardImage className='img-fluid rounded' 
                  src='https://images.pexels.com/photos/4016657/pexels-photo-4016657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                  style={{height:faAutomobile}}  position='top' alt='...' />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </div>
        {/* end best trip */}

 
        {/*==================================== 
        * start Discover ...
        ==================================== */}
        <MDBContainer className="mt-5" fluid>
          <MDBContainer fluid className="bg-danger" style={{height: 290}}>
            <MDBCardTitle>
              <h1 className="text-black"><span style={{ fontWeight: 'bold' }}>Discover the best of <br></br>travelling with us</span></h1>
            </MDBCardTitle>
          <Carousel
          responsive={responsive } >
            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image'>
                  <div className='text-center  bg-image rounded-3' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/11291268/pexels-photo-11291268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                      height: '320px' }}
                  > </div>
                </MDBRipple>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image'>
                  <div className='text-center  bg-image rounded-3' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/3214968/pexels-photo-3214968.jpeg?auto=compress&cs=tinysrgb&w=1600')", 
                      height: '320px' }}
                  > </div>
                </MDBRipple>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image'>
                  <div className='text-center  bg-image rounded-3' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/3214969/pexels-photo-3214969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                      height: '320px' }}
                  > </div>
                </MDBRipple>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image'>
                  <div className='text-center  bg-image rounded-3' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1600')", 
                      height: '320px' }}
                  > </div>
                </MDBRipple>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image'>
                  <div className='text-center  bg-image rounded-3' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/959151/pexels-photo-959151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                      height: '320px' }}
                  > </div>
                </MDBRipple>
              </MDBCard>
            </div>
            <div className='p-6 mt-3 me-3 mb-4'>    
              <MDBCard>
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image'>
                  <div className='text-center  bg-image rounded-3' 
                    style={{ 
                      backgroundImage:
                      "url('https://images.pexels.com/photos/15288555/pexels-photo-15288555.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')", 
                      height: '320px' }}
                  > </div>
                </MDBRipple>
              </MDBCard>
            </div>
          </Carousel>
          </MDBContainer>
          {/* End start Discover ... */}

          <br></br><br></br><br></br><br></br><br></br>
          <br></br>

          {/*==================================== 
          * start register
          ==================================== */}
          <MDBContainer className="mt-5">
            <MDBRow className='mb-3'>
              <MDBCol md='6' fluid>
                <div className='text-center bg-image' 
                  style={{ 
                    backgroundImage:
                    "url('https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", 
                    height: '570px' }}
                > </div>
              </MDBCol>
              <MDBCol md='6' className="mt-2">
              <MDBCard>
                <MDBContainer className="mt-2">
                  <form>  
                    <div className="text-center mb-3">
                        <h1 className='text-body mt-2'>Join with CamTravel</h1>
                        <p className='text-body'>Sign up with:</p>
                        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                          <MDBBtn floating size='md' style={{ backgroundColor: '#3b5998' }}  tag='a'>
                            <MDBIcon fab icon='facebook-f' />
                          </MDBBtn>
                          <MDBBtn floating size='md' style={{ backgroundColor: '#dd4b39' }}  tag='a'>
                            <MDBIcon fab icon='google' />
                          </MDBBtn>
                          <MDBBtn floating size='md' style={{ backgroundColor: '#55acee' }}  tag='a'>
                            <MDBIcon fab icon='twitter' />
                          </MDBBtn>
                        </div>
                        <p className="text-center text-body mt-3">or:</p>
                      </div>

                    <MDBInput wrapperClass='mb-4' label='First Name' id='fristName1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Last Name' name='name' id='lastname1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Email' name='email' id='email1' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Password' name='password' id='password1' type='password'/>
                    <div className='d-flex justify-content-center text-body mb-4'>
                      <MDBCheckbox  name='flexCheck' id='flexCheckDefault' label='Remember me' />
                    </div>
                    <MDBBtn type='submit' className="mb-4 w-100">Sign up</MDBBtn>  
                  </form>
                </MDBContainer>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* end register */}

        </MDBContainer>
      </div>
      {/*==================================== 
      * End main 
      ==================================== */}
      
      
      {/*==================================== 
      * Footer and Scrolltop
      ==================================== */}
      <Scrolltop/>
      <FooterDesign/>
    </div>
    </>
  );
}