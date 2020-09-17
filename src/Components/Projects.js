import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 id="projects_title">Projects</h1>
            <div className="page" id="projects_page">
                <div className="project"><a href="/html/mealabs.html"><h3>MeaLabs</h3></a></div>
                <div className="project"><a href="/html/ottabotics.html"><h3>Ottabotics</h3></a></div>
                <div className="project"><a href="/html/smartplug.html"><h3>Smart Plug</h3></a></div>
                <div className="project"><a href="/html/recyclesorter.html"><h3>Recycle Sorter</h3></a></div>
                <div className="project"><a href="/html/personalwebsite.html"><h3>Personal Website</h3></a></div>
                <div className="project"><a href="/html/wheelchair.html"><h3>Wheelchair</h3></a></div>
            </div>
        </div>
    )
}

export default Projects