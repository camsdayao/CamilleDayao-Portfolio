import React from 'react'
import Project from '../assets/PROJ.PNG'


const Projects = () => {
  return (
    <div name='project' className='w-full h-screen text-black'>
    <div className='flex flex-col justify-center w-full h-full'>
        <div className='text-center mt-20'>
            <div className='text-4xl md:text-6xl font-bold'>
                <p>
                    Projects.
                </p>
            </div>
            <div className='columns-2 m-12 mt-28 flex md:w-1/2 md:mt-12'>
                <img className='p-5 shadow-md shadow-slate-600 hover:scale-110 duration-500' src={Project} alt="Project Image" />
            </div>


        </div>

    </div>
</div>
  )
}

export default Projects
