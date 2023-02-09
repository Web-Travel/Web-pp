// import React, { useState } from 'react';
// import {
//   MDBNavbarNav,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem, MDBBtn, MDBIcon
// } from 'mdb-react-ui-kit';
// import { MDBNavItem } from 'mdbreact';


// export default function Upload() {
 

//   return (
  
//     <div>
//           {/* start post */}
//           <form className='d-flex input-group w-auto'>
//             <MDBNavbarNav >
//               <MDBNavItem className="p-1 hoverable">
//                 <MDBDropdown>
//                   <MDBDropdownToggle tag='a'>
//                   {/* <MDBIcon fas icon="upload" /> */}
//                   <MDBBtn className='me-1' color='danger'>
//                     Upload
//                   </MDBBtn>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem link>Please Join Member for Upload</MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavItem>
//             </MDBNavbarNav>
//           </form>
//           {/* End Post */}

//           </div>
        
//   );
// }

import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function Upload() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
        Upload
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Please Join Member for Upload</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
