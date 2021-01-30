import React from 'react'
import profileImage from '../img/portfolio/profile.png'

function Header() {
    return (
        <div>
            <header className="masthead bg-primary text-white text-center">
                <div className="container">
                    <img className="img-fluid d-block mx-auto mb-5" src={profileImage} alt='' />
                    <h1>Akif Manzoor</h1>
                    <hr className="star-light" />
                    <h2 className="font-weight-light mb-0">Full Stack Developer - Martial Artist - thebomb.com</h2>
                </div>
            </header>
        </div>
    )
}

export default Header
