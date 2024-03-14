import React from 'react'
import "../../App.css"
import './Register.css';
import {useNavigate} from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <>
    <div className='reg-container'>
      <div className='intro-container-r'>
        <h1 className='caption-r'>Welcome to VinGO!</h1>
      </div>
      <div className='form-container'>
        <h1 className='title'>Create an Account</h1>
          <div className='form-inputs'>
            <div className='input'> 
              <i className="fa-regular fa-address-card"></i>
              <input placeholder="Full Name" type="text"/>
            </div>

            <div className='input'> 
              <i className="fa-solid fa-user"></i>
              <input placeholder="Create Username" type="text"/>
            </div>
            
            <div className='input'> 
              <i className="fa-solid fa-at"></i>
              <input placeholder="Email" type="email"/>
            </div>

            <div className='input'> 
              <i className="fa-solid fa-lock"></i>
              <input placeholder="Password" type="password"/>
            </div>

          </div>
          <button className='submit-button'>Submit</button>
          <div>Already have an account? 
          <a className='signInLink' onClick={() => navigate(-1)} href='#' >Sign In</a>
          </div>
      </div>
    </div>
    </>

  )
}

export default Register