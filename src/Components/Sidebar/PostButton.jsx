import React, { useState } from 'react';
import {
  MDBNavbarNav,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem, MDBIcon
} from 'mdb-react-ui-kit';
import { MDBNavItem } from 'mdbreact';


export default function PostButton() {
 

  return (
  
    <div>
          {/* start post */}
          <form className='d-flex input-group w-auto'>
            <MDBNavbarNav >
              <MDBNavItem className="p-1 hoverable">
                <MDBDropdown>
                  <MDBDropdownToggle tag='a'>
                  <MDBIcon fas icon="upload" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Upload Photo</MDBDropdownItem>
                    <MDBDropdownItem link>Upload Video</MDBDropdownItem>
                    <MDBDropdownItem link>Upload Places</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </form>
          {/* End Post */}

          </div>
        
  );
}