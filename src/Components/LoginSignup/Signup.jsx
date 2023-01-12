
import React, { useState } from 'react';
import { MDBBtn, MDBInput,MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
{/*--------------------------------------------------------------
  # Sign up Components
    -------------------------------------------------------------- */}
const Signup = () => {

  /** ++++++++++++++++++++++++++++++++
  #  Sign up Call API
  /** ++++++++++++++++++++++++++++++++ */
  const [id, idChange] = useState('');
  const [name, nameChange] = useState('');
  const [email, emailChange] = useState('');
  const [password, passwordChange] = useState('');

  const naviagte = useNavigate ();

  const IsValidate = () => {
    let isProcessed = true;
    let errorMessage = 'Please enter the value in ';

    if (id === null || id === '') {
        isProcessed = false;
        errorMessage += ' First Name';
    }
    if (name === null || name === '') {
        isProcessed = false;
        errorMessage += ' Last Name';
    }
    if (email === null || email === '') {
      isProcessed = false;
      errorMessage += ' Email';
    }
    if (password === null || password === '') {
        isProcessed = false;
        errorMessage += ' Password';
    }
    // if(!isProcessed){
    //     toast.warning(errorMessage)
    // }
    // else{
    //     if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

    //     }else{
    //         isProcessed = false;
    //         toast.warning('Please enter the valid email')
    //     }
    // }
    return isProcessed;
}

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email };
    
    if (IsValidate()) {
      fetch("http://localhost:8000/user", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(regobj)
      }).then((res) => {
          toast.success('Registered successfully.')
          naviagte('/Photos');
      }).catch((err) => {
          toast.error('Failed :' + err.message);
      });
    }
    console.log(regobj);
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

          <MDBInput value={id} onChange={e=>idChange(e.target.value)} wrapperClass='mb-4' label='First Name' id='fristName1' type='text'/>
          <MDBInput value={name} onChange={e=>nameChange(e.target.value)} wrapperClass='mb-4' label='Last Name' name='name' id='lastname1' type='text'/>
          <MDBInput value={email} onChange={e=>emailChange(e.target.value)} wrapperClass='mb-4' label='Email' name='email' id='email1' type='email'/>
          <MDBInput value={password} onChange={e=>passwordChange(e.target.value)} wrapperClass='mb-4' label='Password' name='password' id='password1' type='password'/>
          <div className='d-flex justify-content-center text-body mb-4'>
            <MDBCheckbox checked name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
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