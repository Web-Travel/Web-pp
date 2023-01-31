import React from 'react';
import { MDBContainer,  MDBCardImage } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Profile = ({name, profile}) => {
  return (
    <MDBContainer className='position-absolute bottom-0 start-0' 
      style={{
      bottom: "10px", left:"5px" 
      }} >
      <Link to = "UserAccount">
      <div className="d-flex " style={{cursor:'pointer'}}>
          <div className="flex-shrink-0">
            <MDBCardImage
              style={{ width: '50px', height: '50px'}}
              className="img-fluid bg-image rounded-circle border-3"
              src= {profile}
              alt='image'
            />
          </div>
          <div className="flex-grow-1 ms-1 d-flex flex-row align-items-center">
              <h5 className="mb-0 mt-2 text-white"> {name} </h5>
          </div>
        </div>
        </Link>
    </MDBContainer>
  );
}
export default Profile;