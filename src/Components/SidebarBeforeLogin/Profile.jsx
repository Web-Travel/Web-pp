import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { signInWithGoogle } from '../LoginSignup/Firebase';

export default function Upload() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
        <img src={localStorage.getItem=("profilePic")} alt="" />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Please Join Member for Upload</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
