import React from 'react';
import '../App.css';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <video src={require("../assets/videos/homepage.webm")}
        autoPlay loop muted/>
        <h1>Discover <span>timeless</span> tunes by your favourite artists
            in <span>authentic</span> vinyl bliss
        </h1>
        <br></br>
        <p>Scroll down to learn more about VinGO</p>
        <p>
          <i className="fa-solid fa-angles-down fa-bounce"/>
        </p>
    </div>
  )
}

export default Hero;