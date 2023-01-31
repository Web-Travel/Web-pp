import { MDBBtn, MDBInput,MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';


const Signup = () => {

  /** ++++++++++++++++++++++++++++++++
  #  Sign up Call API
  /** ++++++++++++++++++++++++++++++++ */

  /** ++++++++++++++++++++++++++++++++
  #  End Sign up Call API
  /** ++++++++++++++++++++++++++++++++ */

  
  
  return (
    <>
    {/*--------------------------------------------------------------
    # Sign Up Form
    -------------------------------------------------------------- */}
    <form className="myform">
    
      <div className="text-center mb-3">
        <p className='text-body'>Sign up with:</p>
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
        <p className="text-center text-body mt-3">or:</p>
      </div>

        {/* Input section */}

          <MDBInput wrapperClass='mb-4' label='First Name' id='fristName1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Last Name' name='name' id='lastname1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' name='email' id='email1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' name='password' id='password1'/>
          <div className='d-flex justify-content-center text-body mb-4'>
            <MDBCheckbox id="remember" type="checkbox" label='I have read and agree to the terms' />
          </div>
          <MDBBtn type='submit' className="mb-4 w-100">Sign up</MDBBtn>
      
        {/* End Input section */}
   
    </form>
    {/*--------------------------------------------------------------
    # End Sign Up Form
    -------------------------------------------------------------- */}
    </>
  );
}
export default Signup;