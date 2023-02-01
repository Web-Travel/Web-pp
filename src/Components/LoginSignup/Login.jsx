import React from 'react';
import { MDBBtn, MDBInput,MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


  const Login = (e) => {

  /** ++++++++++++++++++++++++++++++++
  #   Login Call API
  /** ++++++++++++++++++++++++++++++++ */
  const [email, emailupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();

  useEffect(()=>{
  sessionStorage.clear();
  },[]);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
    /// implementation
    // console.log('proceed');
    fetch('http://localhost:8001/user/'+email).then((res)=>{
        return res.json();
    }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length===0){
            toast.error('Please Enter valid email.');
        }else{
            if(resp.password === password) {
                toast.success('Success');
                sessionStorage.setItem('email', email);
                usenavigate('/photos')
            }else{
                toast.error('Please Enter valid credentials.')
            }
        }
    }).catch((err)=>{
        toast.error('Login Failed due to '+err.message);
    })
    
    }
  }


  const validate = () => {
      let result = true;
      if (email === '' || email === null) {
          result = false;
          toast.warning('Please Enter Email');
      }
      if (password === '' || password === null) {
          result = false;
          toast.warning('Please Enter Password');
      }
      return result;
  }


  // handle password eye
  // const [type, setType]=useState('password');
  // const [icon, setIcon]=useState(eyeOff);
 
  // const handleToggle=()=>{
  //     if(type === 'password'){
  //         setIcon(eye);
  //         setType('text');
  //     }else{
  //         setIcon(eyeOff);
  //         setType('password');
  //     }
  // }
  /** ++++++++++++++++++++++++++++++++
  #   End Login Call API
  /** ++++++++++++++++++++++++++++++++ */
  
  return (
    <>
    {/*--------------------------------------------------------------
    # Login Form
    -------------------------------------------------------------- */}
    <form onSubmit={ProceedLogin}>
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
        <MDBInput value={email} onChange={e => emailupdate(e.target.value)} wrapperClass='mb-4' label='Email' type='text'/>
        <MDBInput value={password} onChange={e => passwordupdate(e.target.value)} wrapperClass='mb-4' label='Password' type='password' />
        <div className="d-flex justify-content-between mx-4 mb-4 text-body">
          <MDBCheckbox id='remember' label='Show Password' />
          <a href="!#">Forgot password?</a>
        </div>
        <MDBBtn type='submit' className="mb-4 w-100">Sign in</MDBBtn>
        <p className="text-center text-body">Not a member? <a href="/"> Register</a></p>
      </div>
    </form>
      {/* End Input section */}          
    </>
  );
}
export default Login;