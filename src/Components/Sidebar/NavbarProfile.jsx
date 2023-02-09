
import {
  MDBNavbarNav,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';


export default function NavbarProfile() {
 

  return (
  
    <div>
          {/* start Profile */}
          <form className='d-flex input-group w-auto'>
            <MDBNavbarNav >

         
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link d-flex align-items-center"
                    href="#"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                      className="rounded-circle"
                      height="30"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Profile</MDBDropdownItem>
                    <MDBDropdownItem link>Setting</MDBDropdownItem>
                    <MDBDropdownItem link>Log out</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
         
              
            </MDBNavbarNav>
          </form>
          {/* End profile */}

          </div>
        
  );
}