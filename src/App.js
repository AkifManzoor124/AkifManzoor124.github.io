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

function App() {
  return (
    <div className="App">
      <div>
        <meta charSet="utf-8" />
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

export default App;
