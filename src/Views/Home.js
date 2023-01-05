import React, { useState } from 'react';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

import {
  MDBContainer, MDBNavbar, MDBNavbarBrand,MDBNavbarToggler, MDBIcon,MDBNavbarNav, MDBNavbarItem, 
  MDBNavbarLink, MDBBtn,  MDBCard, MDBCardImage, MDBCardBody, MDBCollapse, MDBRow,
  MDBCol, MDBInput,MDBCheckbox, MDBModal, MDBModalDialog, MDBModalContent, 
  MDBModalFooter, MDBModalBody, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { faAutomobile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  /** login sign up pop up */
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  // login and sinup
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  /** End login sign up pop up */

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
    {/* start navbar */}
    <div>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            CamTravel
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  HOME
                </MDBNavbarLink>
              </MDBNavbarItem>

              {/* menu */}
              <MDBNavbarItem>
                <Link to='/photos'> 
                  <MDBNavbarLink href='#'>PHOTOS</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>PLACES</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>TOP-PICTURE</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>CONTACT US</MDBNavbarLink>
              </MDBNavbarItem>
              {/* end menu */}
              
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  {/* Disabled */}
                </MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
                
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
    {/* end navbar */}


    {/* start header */}  
      <div
          className=' text-center bg-image'
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2132096/pexels-photo-2132096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '590px' }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Welcome to CamTravel</h1>
                <h4 className='mb-3'>You can find place with location and description and beautiful photos</h4>

                {/* login sign up pop up */}
                <div>
                  <MDBBtn color='light' rippleColor='red' size="lg" onClick={toggleShow}>Join</MDBBtn>
                  <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                    <MDBModalDialog>
                      <MDBModalContent>
                        {/*  */}
                        <MDBModalBody>
                          <MDBContainer className="p-2  d-flex flex-column w-70">

                            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                              <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                  Login
                                </MDBTabsLink>
                              </MDBTabsItem>
                              <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                  Register
                                </MDBTabsLink>
                              </MDBTabsItem>
                            </MDBTabs>

                            <MDBTabsContent>

                              <MDBTabsPane show={justifyActive === 'tab1'}>

                                
                                <div className="mb-3" active aria-current='page'>
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
                                  <p className="text-center mt-3">or</p>
                                </div>

                                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

                                <div className="d-flex justify-content-between mx-4 mb-4">
                                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                  <a href="!#">Forgot password?</a>
                                </div>

                                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                                <p className="text-center">Not a member? <a href="#!">Register</a></p>

                              </MDBTabsPane>

                              <MDBTabsPane show={justifyActive === 'tab2'}>

                                <div className="text-center mb-3">
                                  <p>Sign up with</p>

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

                                  <p className="text-center mt-3">or</p>
                                </div>

                                <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
                                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                                <div className='d-flex justify-content-center mb-4'>
                                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                                </div>

                                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

                              </MDBTabsPane>

                            </MDBTabsContent>

                            </MDBContainer>
                        </MDBModalBody>
                        {/*  */}

                        <MDBModalFooter>
                          <MDBBtn color="secondary" onClick={toggleShow}>
                            Close
                          </MDBBtn>
                        </MDBModalFooter>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>
                </div>
                {/* end login sign up pop up */}

              </div>
            </div>
          </div>

        </div>
      {/* end header */}

      {/*==================== Start main ================ */}
      <div class="main">
        {/* start place */}
        <div class="place" >
          <MDBContainer className='data-mdb-interval '>
            <Carousel
            responsive={responsive } >

              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Siem Reap</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/13104650/pexels-photo-13104650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Koh Kong</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/15004642/pexels-photo-15004642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Kompot</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/15004642/pexels-photo-15004642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Kompot</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/15004642/pexels-photo-15004642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Kompot</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/15004642/pexels-photo-15004642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Kompot</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-6 text-center mt-3 me-3'>
                <div className=' text-center bg-image'
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/15004642/pexels-photo-15004642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", height: '200px' }}
                >
                     <div className='d-flex justify-content-center align-items-center h-100'>
                      <div className='text-white'>
                      <h4 className='mb-3'>Kompot</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
            
          </MDBContainer>
        </div>
        {/* end place =======*/}




          {/* start best trip */}
          {/* text */}
          <div class="best-trip">
            <MDBContainer breakpoint='xxl' className='mt-5'>
              <p className='mb-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                PLAN YOUR TRIP
              </p>
              <h1 className='mb-3'>Where to next?</h1>
            </MDBContainer>
            {/* end text */}

            <div>
              <MDBCard>
                <MDBCardBody>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol className='hover-zoom' start>
                        <MDBCardImage className='className="square bg-primary rounded-7"'  src='https://images.pexels.com/photos/12168511/pexels-photo-12168511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  style={{height:faAutomobile}} position='top' alt='...' />
                          <MDBCol className='hover-zoom mt-3' start>
                            <MDBCardImage src='https://images.pexels.com/photos/4794752/pexels-photo-4794752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  style={{height:faAutomobile}} position='top' alt='...' />
                          </MDBCol>
                      </MDBCol>
                      <MDBCol className='hover-zoom' center>
                        <MDBCardImage className=' mt-3' src=' https://images.pexels.com/photos/11295223/pexels-photo-11295223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  style={{height:faAutomobile}}  position='top' alt='...' />
                      </MDBCol>
                     
                      <MDBCol className=' hover-zoom' end>
                        <MDBCardImage src='https://images.pexels.com/photos/9704431/pexels-photo-9704431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' style={{height:faAutomobile}}  position='top' alt='...' />
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>
              </MDBCard>
            </div>

          </div>
          {/* end best trip */}
         


          <div class="login">
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
          </div>

          
      </div>
      {/*==================== End main ================ */}
      
    </>
  );
}