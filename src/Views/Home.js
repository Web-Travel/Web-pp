
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { faAutomobile } from '@fortawesome/free-solid-svg-icons';
import NavbarHomepage from '../Components/NavbarHomepage';
import Join from '../Components/Join';
import {
  MDBContainer, MDBIcon, MDBBtn,  MDBCard, MDBCardImage, MDBCardBody, MDBRow,
  MDBCol, MDBInput,MDBCheckbox, MDBRipple, MDBCardTitle, MDBCardText
} from 'mdb-react-ui-kit';
import FooterDesign from '../Components/FooterDesign';

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
      <NavbarHomepage transparent/>

      {/* start header */}  
      <div>
        <div
          className='text-center bg-image'
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2132096/pexels-photo-2132096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '500px' }}
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
                <div className=' text-center bg-image'
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                > </div>
                
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle><h2><span style={{ fontWeight: 'bold' }}>Siem Reap</span></h2></MDBCardTitle>
                  <MDBCardText><p>Post by <span style={{ fontWeight: 'bold' }}>Phors</span></p></MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
            
            <div className='p-6 mt-3 me-3'>
              <MDBCard >
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <div className=' text-center bg-image'
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/13104650/pexels-photo-13104650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
               
                </div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle><h3><span style={{ fontWeight: 'bold' }}>Koh Kong</span></h3></MDBCardTitle>
                  <MDBCardText><p>Post by <span style={{ fontWeight: 'bold' }}>Phors</span></p></MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className='p-6 mt-3 me-3'>
              <MDBCard >
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <div className=' text-center bg-image'
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/12098898/pexels-photo-12098898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                
                </div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle><h3><span style={{ fontWeight: 'bold' }}>Phnom Penh</span></h3></MDBCardTitle>
                  <MDBCardText><p>Post by <span style={{ fontWeight: 'bold' }}>Phors</span></p></MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
    
            <div className='p-6 mt-3 me-3'>
              <MDBCard >
                <MDBRipple  rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <div className=' text-center bg-image'
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/15004642/pexels-photo-15004642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
               
                </div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle><h3><span style={{ fontWeight: 'bold' }}>Kompot</span></h3></MDBCardTitle>
                  <MDBCardText><p>Post by <span style={{ fontWeight: 'bold' }}>Phors</span></p></MDBCardText>
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
            style={{ backgroundImage: "url('https://images.pexels.com/photos/5984848/pexels-photo-5984848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '500px' }}
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
                style={{ backgroundImage: "url('https://images.pexels.com/photos/13452820/pexels-photo-13452820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '250px' }}
              ></div>
            </MDBCol>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ backgroundImage: "url('https://images.pexels.com/photos/8805449/pexels-photo-8805449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '250px' }}
              ></div>
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-3' end>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ backgroundImage: "url('https://images.pexels.com/photos/12610510/pexels-photo-12610510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '250px' }}
              ></div>
            </MDBCol>
            <MDBCol size='4'>
              <div className='bg-image'
                style={{ backgroundImage: "url('https://images.pexels.com/photos/13771968/pexels-photo-13771968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '250px'}}
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
                  <MDBCardImage className='img-fluid rounded' src='https://images.pexels.com/photos/10259251/pexels-photo-10259251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  style={{height:faAutomobile}} position='top' alt='...' />
                </MDBCol>
                <MDBCol className='hover-zoom' center>
                  <MDBCardImage className='img-fluid rounded mt-5' src='https://images.pexels.com/photos/12078900/pexels-photo-12078900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  style={{height:faAutomobile}}  position='top' alt='...' />
                </MDBCol> 
                <MDBCol className='hover-zoom' end>
                  <MDBCardImage className='img-fluid rounded' src='https://images.pexels.com/photos/14589051/pexels-photo-14589051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' style={{height:faAutomobile}}  position='top' alt='...' />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCardBody>
        </div>
        {/* end best trip */}
         
        {/* sign up */}
        <MDBContainer fluid className='p-4'>
          <MDBRow>
            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                {/*  */}
            </MDBCol>
            <MDBCol md='5'>
              <MDBCard className='my-5'>
                <h5 className="my-3  text-center display-3 fw-bold ls-tight px-3">
                  Join with <br />
                  <span className="text-primary">CamTravel</span>
                </h5>
                <p className='px-3 text-center ' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                  Join with CamTravel you can find place for your plan travel,and you can <br></br>  download photo powered by a community of photographers.
                </p>
                <MDBCardBody className='p-5'>
                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                    </MDBCol>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div>
                  <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
                  <div className="text-center mb-3">
                    <p>Sign in with</p>
                      <div className='d-flex justify-content-between mx-auto' style={{width: '50%'}}>
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
                    </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* ENd sign up */}
            
      </div>
      {/*==================== End main ================ */}
      {/* call footer from components */}
      <FooterDesign/>
    </div>
    </>
  );
}