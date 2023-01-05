import React from "react";
import {
  MDBContainer, MDBIcon, MDBBtn,MDBInput,MDBCheckbox, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, 
  MDBModalFooter, MDBModalBody, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Join(props) {
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


  return (
    <>
      {/* login sign up pop up */}
      <div>
                  <MDBBtn color='light' rippleColor='red' size="lg" onClick={toggleShow}>Join</MDBBtn>
                  <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                    <MDBModalDialog>
                      <MDBModalContent>
                        {/*  */}
                        <MDBModalBody>
                          <MDBContainer className="p-5  d-flex flex-column w-70">

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

                                
                                <div className=" mb-3">
                                  <p>Sign in with</p>
                                  <div className='d-flex justify-content-between mx-auto' style={{width: '38%'}}>
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

                                  <div className='d-flex justify-content-between mx-auto' style={{width: '38%'}}>
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
    </>
  );
}