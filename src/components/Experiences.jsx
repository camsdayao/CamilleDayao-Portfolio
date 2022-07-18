import React from 'react'
import {GiGraduateCap} from 'react-icons/gi'
import {ImArrowUp} from 'react-icons/im'
import {MdOutlineWork} from 'react-icons/md'

const Experiences = () => {
  return (
    <div name='Work' className='w-full h-screen'>
      <div className='flex flex-col justify-center w-full h-full'>
        <div className='text-center mt-20'>
          <h1 className='text-4xl md:text-6xl font-bold mb-11'>
          Work Experiences.
          </h1>
        </div>
        <div className='flex justify-center bg-orange-100 flex-row mx-20 py-8 rounded-2xl md:mx-96 mt-16'>
        <MdOutlineWork size={28}/>
        <p className='mx-4 font-bold'>
          Software Engineer (2022)
        </p>
        </div>
        <div className='flex justify-center m-4'>
        <ImArrowUp size={28}/>
        </div>
        <div className='flex justify-center bg-orange-100 flex-row mx-20 py-8 rounded-2xl md:mx-96'>
          <MdOutlineWork size={28}/>
        <p className='mx-4 font-bold'>
          Software Test Engineer (2021)
        </p>
        </div>
        <div className='flex justify-center m-4' >
        <ImArrowUp size={28}/>
        </div>
        <div className='flex justify-center bg-orange-100 flex-row mx-20 py-8 rounded-2xl md:mx-96'>
          <GiGraduateCap size={28}/>
        <p className='mx-4 font-bold'>
           Electronics Engineering (2020)
        </p>
        </div>


      </div>
     
    </div>
  )
}

export default Experiences
