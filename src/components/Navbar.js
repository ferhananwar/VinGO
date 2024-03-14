import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <nav className="navbar sticky-top">
                <div className="navbar-container">
                    <Link to='/vingo' className="navbar-logo" onClick={() => {
                        closeMobileMenu();
                        scrollToTop();
                    }
                    }>
                        VinG <i className="fa-solid fa-compact-disc fa-spin" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/vingo' className='nav-links' onClick={() => {
                                closeMobileMenu();
                                scrollToTop();
                            }
                            }>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <HashLink smooth to='/vingo#about-us' className='nav-links' onClick={closeMobileMenu}>About Us</HashLink>
                        </li>
                        <li className='nav-item'>
                            <Link to='/browse' className='nav-links' onClick={closeMobileMenu}>
                                Browse
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/account' className='nav-links' onClick={closeMobileMenu}>
                                Account
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar