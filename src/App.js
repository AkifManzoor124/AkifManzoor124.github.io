import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import './bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Ericsson from './components/Ericsson'
import DiceFiesta from './components/DiceFiesta'

function MainContent() {

  return (
    <div className="App">
      <div>
        <meta charSet="utf-8" />S
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Akif Manzoor</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" />
        <Navbar></Navbar>
        <Header></Header>
        <Portfolio></Portfolio>
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/ericsson"}>
          <Ericsson />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/dicefiesta"}>
          <DiceFiesta />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <MainContent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;


