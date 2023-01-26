import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import {  } from 'mdb-react-ui-kit';
import { 
  MDBNavItem,MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBIcon , MDBNavbarBrand,
  MDBNavbar, MDBContainer
} from 'mdbreact';
import { Link } from 'react-router-dom';
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
            <MDBNavbarBrand className="flex-center hoverable h6-responsive">
            <a href="http://localhost:3001/" className="text-danger" target="_blank" rel="noopener noreferrer">
              <MDBIcon fab icon="github-alt"/><span style={{ fontWeight: 'bold' }}> CamTravel</span></a>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}

              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem className="p-1 hoverable" active>
                    <Scrollchor to="" className="nav-link text-dark">
                      HOME
                    </Scrollchor>
                  </MDBNavItem>
                  <MDBNavItem className="p-1 hoverable">
                    <Scrollchor>
                      <Link to='Photos' className='nav-link text-dark' >
                        PHOTOS
                      </Link>
                    </Scrollchor>  
                  </MDBNavItem>
                  <MDBNavItem className="p-1 hoverable">
                    <Scrollchor>
                      <Link to='Place' className='nav-link text-dark' >
                        PLACES
                      </Link>
                    </Scrollchor>
                  </MDBNavItem>
                  <MDBNavItem className="p-1 hoverable">
                    <Scrollchor>
                      <Link to='Picture' className='nav-link text-dark' >
                        TOP-PICTURE
                      </Link>
                    </Scrollchor>
                  </MDBNavItem>
                  <MDBNavItem className="p-1 hoverable ">
                    <Scrollchor>
                      <Link to='Contact' className='nav-link text-dark' >
                        CONTACT-US
                      </Link>
                    </Scrollchor>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>

          </MDBContainer>
        </MDBNavbar>
    );
  }
}

export default Navbar;