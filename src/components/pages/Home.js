import React from 'react';
import '../../App.css';
import Hero from "../Hero";
import './Home.css';

function Home() {
    return (
        <>
            <Hero />
            <div className='section-1'>
                <div className='slogan-1'>
                    <h1>Spinning Memories, Creating Moments</h1>
                </div>
                <div className='vinyl-home'>
                    <video src="/videos/vhome.webm"
                        autoPlay loop muted className='vhome' />
                </div>
            </div>
            <div className='section-2'>
                <div className='vinyl-player'>
                    <video src="/videos/vplayer.webm"
                        autoPlay loop muted className='vplayer' />
                </div>
                <div className='slogan-2'>
                    <h1>Go Vinyl, Go Classic, Go VinGO!</h1>
                </div>
            </div>
            <div id="about-us" className='about-container'>
                <div className='content'>
                    <h1>About Us</h1>
                    <p>VinGO is the premier destination for vinyl enthusiasts and music lovers
                        alike. We are dedicated to preserving the timeless
                        allure of vinyl records and celebrating the rich culture
                        of analog sound.
                    </p>
                    <p>Established by a passionate team of music lovers,
                        our store is more than just a marketplace. With a carefully
                        curated selection of classic favorites, rare finds, and
                        emerging artists, we offer an extensive collection that caters
                        to diverse tastes and preferences. We have built a
                        haven where music enthusiast can connect, explore, and indulge
                        in their passion for vinyl.
                    </p>
                    <p>At VinGO, we believe that music has the power to inspire,
                        unite, and uplift. That's why we are dedicated to fostering a
                        community of music lovers who share our passion for vinyl. Join us
                        on this journey as we continue to celebrate the beauty and
                        nostalgia of vinyl records, one groove at a time.
                    </p>
                    <h2>Hours of Operation</h2>
                    <p>Monday - Saturday: 10:30am - 7:00pm EST
                        <br/>
                        Sunday: Closed

                    </p>
                    <br/>
                    <h2>Contact Information</h2>
                    <p>
                        VinGO
                        <br/>
                        123 Dundas Street
                        <br/>
                        Toronto, Ontario
                        <br/>
                        A1B2C3
                        <br/>
                        (123) 456-789
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;