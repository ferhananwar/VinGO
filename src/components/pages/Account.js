import React from 'react';
import '../../App.css';
import './Account.css';

function Account() {
  return (
    <>
    <div className='acc-container'>
      <div className='intro-container'>
        <h1 className='caption'>Welcome back to VinGO!</h1>
      </div>
      <div className='form-container'>
        <h1 className='title'>Login</h1>
          <div className='form-inputs'>
            <div className='input'> 
              <i className="fa-solid fa-user"></i>
              <input placeholder="Username" type="text"/>
            </div>
            <div className='input'> 
              <i className="fa-solid fa-lock"></i>
              <input placeholder="Password" type="password"/>
            </div>
          </div>
          <button className='login-button'>Sign In</button>
          <div>Don't have an account? 
          <a className='signUpLink' href='./Register'>Sign Up Here</a>
          </div>
      </div>
    </div>
    </>

  )
}

export default Account;