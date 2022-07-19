import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrMailOption} from 'react-icons/gr'
import {FaRegCopyright} from 'react-icons/fa'

const footer = () => {
  return (
    <div class='footer' className=' bg-slate-300 w-full mt-10'>
        <div className='flex space-x-8 justify-start mx-10 p-10 w-full'>
          <a href="https://facebook.com/camille.dayao.3"
          target="_blank">
          <BsFacebook size={22}/>
          </a>
          <a href="https://twitter.com/camilledayao"  target="_blank">
          <BsTwitter size={22}/>
          </a>

          <a href="https://ph.linkedin.com/in/camille-dayao-818175188"  target="_blank">
          <BsLinkedin size={22}/>
          </a>
         
          <a href="https://github.com/camsdayao"  
              target="_blank">
          <BsGithub size={22}/>
          </a>
          
          <a href="mailto: camsdayao@gmail.com"  target="_blank"> 
          <GrMailOption size={22}/>
          </a>
        </div>
        <div className='flex my-5 m-10 align-sub w-full'>
           <p className='text-1xl space-x-5 mb-9 px-2 shadow-2xl md:text-2xl'>CamilleDayao</p>
           <FaRegCopyright size={18} />
        </div>
    </div>
  )
}

export default footer