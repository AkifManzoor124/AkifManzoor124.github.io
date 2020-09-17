import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <FrontPage /> 
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
