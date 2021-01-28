import React, { useState } from 'react'
import { Link, animateScroll } from 'react-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import './Navbar.css'
import { Fab } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < -2000) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    })

    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" onClick={scrollToTop}>Akif Manzoor</a>
                    <button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto">
                            <Link to="portfolio" smooth={true}><li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a></li></Link>
                            <Link to="about" smooth={true}><li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li></Link>
                            <Link to="resume" smooth={true}><li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#resume">Resume</a></li></Link>
                            <Link to="contact" smooth={true}><li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li></Link>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="https://github.com/AkifManzoor124">Github</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Fab variant="extended" className={scrolled === false ? 'scroll-to-top-hide' : 'scroll-to-top'} onClick={scrollToTop}>
                <NavigationIcon />
            </Fab>
        </div>
    )
}

export default Navbar
