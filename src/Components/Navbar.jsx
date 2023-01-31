import React from 'react';
import {  } from 'mdb-react-ui-kit';
import { 
  MDBNavItem,MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBIcon , MDBNavbarBrand,
  MDBNavbar, MDBContainer
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import "../Assets/Styles/Navbar.css"
import Join from '../Components/LoginSignup/Join'


/** Function back to top */
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/** End Function back to top */

class Navbar extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  
  

  render() {
    return (
        <MDBNavbar class="navbar" className="bg-white font-weight-border h6-responsive py-2 " 
        fixed="top" expand="md" scrolling transparent>
          <MDBContainer fluid breakpoint='md'>
          <NavLink exact to="/" >
            <MDBNavbarBrand onClick={backToTop} className="flex-center hoverable h6-responsive">
            <a className="text-danger" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="github-alt"/><span style={{ fontWeight: 'bold' }}> CamTravel</span></a>
            </MDBNavbarBrand>
            </NavLink>
            
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}

            
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem onClick={backToTop} className="p-1 hoverable" active >
                    <NavLink exact to="/" className='nav-link text-dark'>
                      HOME
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={backToTop} className="p-1 hoverable">
                    <NavLink exact to="/photos" className='nav-link text-dark'>
                      PHOTOS
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={backToTop} className="p-1 hoverable">
                    <NavLink exact to="/places" className='nav-link text-dark'>
                      PLACES
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={backToTop} className="p-1 hoverable">
                    <NavLink exact to="/pictures" className='nav-link text-dark'>
                      TOP-PICTURE
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={backToTop} className="p-1 hoverable ">
                    <NavLink exact to="/contact" className='nav-link text-dark'>
                      CONTACT-US
                    </NavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>

          </MDBContainer>
        </MDBNavbar>
    );
  }
}

export default Navbar;