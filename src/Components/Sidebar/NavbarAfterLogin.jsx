import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse,  
} from 'mdb-react-ui-kit';
import { Spin as Hamburger } from 'hamburger-react'
import { MDBNavItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import PostButton from './PostButton';
import NavbarProfile from './NavbarProfile';

export default function NavbarAfterLogin() {
  const [isOpen, setOpen] = useState(false);

  // const [showPost, setShowPost] = useState(true);

  return (
    <MDBNavbar expand='md' className="bg-white font-weight-border h6-responsive py-2 " fixed="top"  scrolling transparent>
      <MDBContainer fluid  breakpoint='md'>
        <NavLink exact to="/" >
          <MDBNavbarBrand className="flex-center hoverable h6-responsive">
            <a className="text-danger" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="github-alt"/><span style={{ fontWeight: 'bold' }}> CamTravel</span></a>
          </MDBNavbarBrand>
        </NavLink>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation' 
        >
          <PostButton/>
        </MDBNavbarToggler>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation' 
        >
          <NavbarProfile/>
        </MDBNavbarToggler>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger size={20}/>
        </MDBNavbarToggler>

        <MDBCollapse navbar show={isOpen}>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavItem  className="p-1 hoverable">
              <NavLink  active className='nav-link text-dark'>
                PHOTOS
              </NavLink>
            </MDBNavItem>
            <MDBNavItem  className="p-1 hoverable">
              <NavLink className='nav-link text-dark'>
                PLACE
              </NavLink>
            </MDBNavItem>
            <MDBNavItem  className="p-1 hoverable">
              <NavLink className='nav-link text-dark'>
                TOP-PICTURES
              </NavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          {/* Call PostButtom from PostButtom file*/}
          <PostButton/>
          {/* End Profile */}


          {/* Call NavbarProfile from NavbarProfile file*/}
          <NavbarProfile/>
          {/* End Profile */}

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}