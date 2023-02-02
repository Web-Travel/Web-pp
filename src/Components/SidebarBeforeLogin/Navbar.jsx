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
import Upload from './Upload';


export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  /** Function back to top */
  function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  /** End Function back to top */

  // const [showPost, setShowPost] = useState(true);

  return (
    <MDBNavbar expand='md' className="bg-white font-weight-border h6-responsive py-2 " fixed="top"  scrolling transparent>
      <MDBContainer fluid  breakpoint='md'>
        <NavLink exact to="/" onClick={backToTop} >
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
          <Upload/>
        </MDBNavbarToggler>

        {/* <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation' 
        >
          <Join absolute/>
        </MDBNavbarToggler> */}

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
              <NavLink exact to="/" onClick={backToTop} active className='nav-link text-dark'>
                HOME
              </NavLink>
            </MDBNavItem>

            <MDBNavItem  className="p-1 hoverable">
              <NavLink exact to="/photos" onClick={backToTop} className='nav-link text-dark'>
                PHOTOS
              </NavLink>
            </MDBNavItem>
            <MDBNavItem  className="p-1 hoverable">
              <NavLink exact to="/places" onClick={backToTop} className='nav-link text-dark'>
                PLACE
              </NavLink>
            </MDBNavItem>
            <MDBNavItem  className="p-1 hoverable">
              <NavLink exact to="/picture" onClick={backToTop} className='nav-link text-dark'>
                TOP-PICTURES
              </NavLink>
            </MDBNavItem>
            <MDBNavItem  className="p-1 hoverable">
              <NavLink exact to="/contact" onClick={backToTop} className='nav-link text-dark'>
                CONTACT-US
              </NavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          {/* Call PostButtom from PostButtom file*/}
          <Upload/>
          {/* End Profile */}
          {/* <Join absolute/> */}

        </MDBCollapse>
      </MDBContainer>
      
    </MDBNavbar>
  );
}