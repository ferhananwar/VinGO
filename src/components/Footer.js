import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='ft-container'>
      <div className='sub-form'>
        <p className='sub-caption'>Subscribe to our newsletter to hear about new arrivals,
        restocks and much more!</p>
        <input placeholder='Email' type='email' className='sub-input'> 
        </input>
        <button>Sign Up</button>
      </div>
      <div className='ft-content'>
        <div className='content-item'>
          VinGO
          <br />
          123 Dundas Street
          <br />
          Toronto, Ontario
          <br />
          A1B2C3
          <br />
          (123) 456-789
        </div>
        <div className='content-item'>
          <p>
            Hours
            <br />
            Monday - Saturday: 10:30am - 7:00pm EST
            <br />
            Sunday: Closed
          </p>
        </div>
        <div className='content-item'>
            Follow us
        </div>
      </div>
      <p className='legal'>Copyright @ 2024</p>
    </div>
  )
}

export default Footer