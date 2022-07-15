import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Dark from './components/Dark';
import About from './components/About'
import Experiences from './components/Experiences'
import Project from './components/Projects'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <Project/>
    </>


    );
   
}
export default App;
