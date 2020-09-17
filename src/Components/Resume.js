import React from 'react';

const Resume = () => {
    return (
        <div>
            <h1 id="resume_title">Resume</h1>
            <div className="page" id="resume_page">
              <img src={require("../images/resume.jpg")} alt=""></img>
            </div>        
        </div>
    )
}

export default Resume