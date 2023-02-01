import { MDBBtn, MDBInput,MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {

  /** ++++++++++++++++++++++++++++++++
  #  Sign up Call API
  /** ++++++++++++++++++++++++++++++++ */
  const [username, usernamechange] = useState("");
  const [fullname, fullnamechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
      let isproceed = true;
      let errormessage = 'Please enter the value in ';

      if (username === null || username === '') {
          isproceed = false;
          errormessage += ' Username';
      }
      if (fullname === null || fullname === '') {
          isproceed = false;
          errormessage += ' Fullname';
      }
      if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
      }
      if (password === null || password === '') {
          isproceed = false;
          errormessage += ' Password';
      }
      
      if(!isproceed){
          toast.warning(errormessage)
      }
      else{
          if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
          }else{
              isproceed = false;
              toast.warning('Please enter the valid email')
          }
      }
      return isproceed;
  }


  const handlesubmit = (e) => {
          e.preventDefault();
          let regobj = { username, fullname, password, email};
          if (IsValidate()) {
          //console.log(regobj);
          fetch(" http://localhost:8001/user", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(regobj)
          }).then((res) => {
              toast.success('Registered successfully.' +res.message)
              navigate('/join');
          }).catch((err) => {
              toast.error('Failed :' + err.message);
          });
      }
  }
  /** ++++++++++++++++++++++++++++++++
  #  End Sign up Call API
  /** ++++++++++++++++++++++++++++++++ */

  
  
  return (
    <>
    {/*--------------------------------------------------------------
    # Sign Up Form
    -------------------------------------------------------------- */}
    <form className="myform"  onSubmit={handlesubmit}>
    
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

          <MDBInput 
          value={username} onChange={e => usernamechange(e.target.value)} 
          wrapperClass='mb-4' label='Username' id='username' type='text'
          />

          <MDBInput 
          value={fullname} onChange={e => fullnamechange(e.target.value)} 
          wrapperClass='mb-4' label='Full name' id='fullname' type='text'
          />

          <MDBInput 
          value={email} onChange={e => emailchange(e.target.value)} 
          wrapperClass='mb-4' label='Email'  id='email1' type='email'
          />

          <MDBInput 
          value={password} onChange={e => passwordchange(e.target.value)} 
          wrapperClass='mb-4' label='Password' id='password1' type='password'
          />

          <div className='d-flex text-body mb-4'>
            <MDBCheckbox label='Show Password' />
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