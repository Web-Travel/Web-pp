import React from 'react';
import Login from "../LoginSignup/Login.jsx"
import Signup from './Signup.jsx';
import { useState } from 'react';
import {
  MDBBtn, MDBModal, MDBModalDialog,MDBModalContent,MDBModalHeader, MDBModalBody, MDBModalFooter, 
  MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane,
} from 'mdb-react-ui-kit';

export default function Join() {
  const [staticModal, setStaticModal] = useState(false);
  const toggleShow = () => setStaticModal(!staticModal);

  const [justifyActive, setJustifyActive] = useState('tab1');;
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <>
      <MDBBtn onClick={toggleShow} color='light' rippleColor='red' size="lg">
        Join
      </MDBBtn>

      <MDBModal staticBackdrop tabIndex='-`1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* sign in with sign up  */}
              <MDBContainer className="p-3 d-flex flex-column w-70">

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

                  {/*--------------------------------------------------------------
                  # Login Form
                  -------------------------------------------------------------- */}
                  <MDBTabsPane show={justifyActive === 'tab1'}>
                    <Login/>
                  </MDBTabsPane>
                  
                  {/*--------------------------------------------------------------
                  # Sign Up Form
                  -------------------------------------------------------------- */}
                  <MDBTabsPane  show={justifyActive === 'tab2'}>
                    <Signup/>
                  </MDBTabsPane>

                </MDBTabsContent>
              </MDBContainer>
              {/* End sign in with sign yp  */}

            {/*--------------------------------------------------------------
            #  Close
            -------------------------------------------------------------- */}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}