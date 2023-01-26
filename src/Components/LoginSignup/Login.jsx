import React from 'react';
import { MDBBtn, MDBInput,MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
  const Login = (e) => {

  /** ++++++++++++++++++++++++++++++++
  #   Login Call API
  /** ++++++++++++++++++++++++++++++++ */
    
  /** ++++++++++++++++++++++++++++++++
  #   End Login Call API
  /** ++++++++++++++++++++++++++++++++ */
  
  return (
    <>
    {/*--------------------------------------------------------------
    # Login Form
    -------------------------------------------------------------- */}
    <form >
      <div className="text-center mb-3">
        <p className='text-body'>Sign in with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn floating size='md' style={{ backgroundColor: '#3b5998' }}  tag='a'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn floating size='md' style={{ backgroundColor: '#dd4b39' }}  tag='a'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn floating size='md' style={{ backgroundColor: '#55acee' }}  tag='a'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
        </div>
        <p className="text-center mt-3 text-body">or:</p>
      </div>

      {/* Input section */}
      <div>
        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form2'/>
        <div className="d-flex justify-content-between mx-4 mb-4 text-body">
          <MDBCheckbox id='remember' label='Show Password' />
          <a href="!#">Forgot password?</a>
        </div>
        <MDBBtn type='submit' className="mb-4 w-100">Sign in</MDBBtn>
        <p className="text-center text-body">Not a member? <a href="/Signup"> Register</a></p>
      </div>
    </form>
      {/* End Input section */}          
    </>
  );
}
export default Login;