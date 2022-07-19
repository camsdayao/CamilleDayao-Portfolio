import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Dark from './components/Dark';
import About from './components/About'
import Experiences from './components/Experiences'
import Project from './components/Projects'
import {Routes,Route} from 'react-router-dom'
import Contact from './components/Contact';
import Footer from './components/footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <Project/>
    <Experiences/>
    <Contact/>
    <Footer/>
    </>


    );
   
}
export default App;
