import React from 'react';
import { MDBBtn, MDBInput,MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';



  const Login = (e) => {

  /** ++++++++++++++++++++++++++++++++
  #   Login Call API
  /** ++++++++++++++++++++++++++++++++ */
  const [id, idupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
    /// implementation
    // console.log('proceed');
    fetch('https://json-api-test.onrender.com/user/'+id).then((res)=>{
        return res.json();
    }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length===0){
            toast.error('Please Enter valid username.');
        }else{
            if(resp.password === password) {
                toast.success('Success');
                sessionStorage.setItem('username', id);
                usenavigate('/homelog');
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
      if (id === '' || id === null) {
          result = false;
          toast.warning('Please Enter username');
      }
      if (password === '' || password === null) {
          result = false;
          toast.warning('Please Enter Password');
      }
      return result;
  }


  // handle password eye
  
  /** ++++++++++++++++++++++++++++++++
  #   End Login Call API
  /** ++++++++++++++++++++++++++++++++ */
  // handle password eye
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
        <MDBInput value={id} onChange={e => idupdate(e.target.value)} wrapperClass='mb-4' label='Username' name='id' type='text'/>
        <MDBInput value={password} onChange={e => passwordupdate(e.target.value)} wrapperClass='mb-4' label='Password' name='password' type='password' />
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