import React from 'react';

const FrontPage = () => {
    return (
        <div className="page" id="landing_page">
        <div className="topnav" id="navigation_bar">
          <div id="left">
            <a href="#landing_page">Akif Manzoor</a>
          </div>
          <div id="right">
            <a href="#projects_title">Projects</a>
            <a href="#resume_title">Resume</a>
            <a href="#contact_title">Contact</a>
            <a href="https://www.github.com/akif124">GitHub</a>
          </div>
        </div>
        <div className="page" id="front_page">
          <div id="top">
            <img src={require("../images/Akif.jpg")} alt=""></img>
          </div>
        </div>
      </div>
    )
}

export default FrontPage