import React from 'react'
import Selenium from '../assets/SELENIUM.png'
import Unix from '../assets/UNIX.png'
import Oracle from '../assets/ORACLE.png'
import MySQL from '../assets/MYSQL.png'
import Java from '../assets/JAVA.png'
import C from '../assets/C++.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import Tailwind from '../assets/TAILWIND.jpg'
import React1 from '../assets/REACT.png'
import Java1 from '../assets/JAVA1.png'


const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
    <div className='flex flex-col justify-center w-full h-full'>
        <div className='text-center mt-20'>
         <h1 className='text-4xl md:text-6xl font-bold'>
            About.
         </h1>
        
        </div>
        <div className='m-10 space-y-2 text-center text-1xl md:text-2xl text-black '>
            <p>
             Hi there! Again, my name is <strong>Camille, a software engineer based in Manila.</strong> Graduate of Electronics Engineering passionable in software innovations. I do have a background in software testing/software QA, specializing in manual testing and automation testing using Selenium.
             
            </p>
            <p>
            After discovering the world of QA/testing, I shifted to software developing and currently working as Developer specializing in Java. 
            </p>
 
        </div>
        <div className='text-center text-1xl md:text-2xl mr-4'>
            <p>
            Below are the list of the languages and tools I have worked with. Feel free to look around! :)
            </p>
            </div>  

            <div className='w-full text-justify gap-2 grid grid-rows-2 grid-flow-col mx-2 items-center mt-2 md:text-center md:gap-6'>
                <div className='shadow-md shadow-slate-600 hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Selenium} alt="" />
                     <p className='my-4 hidden md:flex md:justify-center'>
                        Selenium
                    </p>
                </div>
                <div className='shadow-md  shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        HTML
                    </p>
                </div>
                <div className='shadow-md shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Unix} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        UNIX
                    </p>
                </div>
                <div className='shadow-md  shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        CSS
                    </p>
                </div>
                <div className='shadow-md shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Oracle} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        ORACLE SQL
                    </p>
                </div>
                <div className='shadow-md  shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        C++
                    </p>
                </div>
                <div className='shadow-md shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySQL} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        mySQL
                    </p>
                </div>
                <div className='shadow-md shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java1} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        JAVA
                    </p>
                </div>
               
                <div className='shadow-md  shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        Tailwind
                    </p>
                </div>
                <div className='shadow-md  shadow-slate-600 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={React1} alt="" />
                    <p className='my-4 hidden md:flex md:justify-center'>
                        React
                    </p>
                </div>

            </div>
            <div>
            </div>

           
            </div>
        </div>
  )
}

export default About
