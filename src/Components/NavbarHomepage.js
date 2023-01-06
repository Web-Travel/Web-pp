import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  MDBContainer, MDBNavbar, MDBNavbarBrand,MDBNavbarToggler, MDBIcon,MDBNavbarNav, MDBNavbarItem, 
  MDBNavbarLink, MDBCollapse
} from 'mdb-react-ui-kit';

export default function NavbarHomepage() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='xl' light bgColor='light' fixed>
      <MDBContainer fluid>

        <MDBNavbarBrand href='#'>
          CamTravel
        </MDBNavbarBrand>
        
        <MDBNavbarToggler
          aria-controls='navbarExample01'
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
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}