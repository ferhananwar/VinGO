import React from 'react';
import '../App.css';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src="/videos/homepage.webm" 
        autoPlay loop muted/>
        <h1>Fall in love with your favourite music artists for the first time again </h1>
        <br></br>
        <p>Scroll down to learn more about VinGO</p>
        <p>
          <i className="fa-solid fa-angles-down fa-bounce"/>
        </p>
    </div>
  )
}

export default Hero;