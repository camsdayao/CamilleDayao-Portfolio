import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';
import {ImSwitch} from 'react-icons/im';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const [lightSwitch, setLight] = useState(false)
  const darkmodeClick = () => setLight(!lightSwitch)

  return (
    <div className='fixed p-2 bg-orange-100 md:items-center w-full'>
        <div className='flex items-center justify-around'>
            <div className='pt-2 cursor-pointer'>
             <h3 class='font-bold text-3xl mr-8 md:text-4xl'>
                Camille Dayao
             </h3>
             <h2 class='mr-2 md:text-2xl'>
             Software Engineer
             </h2>
            </div>
        <div className='hidden lg:flex space-x-8 font-normal items-justify'>
          <div>
            <a href="#" class="underline hover:underline-offset-2 hover: font-normal">About Me</a>
          </div>
          <div>
            <a href="#" class="underline hover:underline-offset-2">Projects</a>
          </div>
          <div>
            <a href="#" class="underline hover:underline-offset-2">Work Experiences</a>
          </div>
         <div>
         <a href="#" class="underline hover:underline-offset-2">Contacts</a>
         </div>
          </div>

        <div className='flex mx-20 cursor-pointer items-center space-x-3' >
          <div className='md:hidden space-x-2' onClick={handleClick}>
          {!nav ? < GiHamburgerMenu size={22} /> : <GrClose size={22}/>}
          </div>
          <div className='cursor-pointer' onClick={darkmodeClick}>
      {!lightSwitch ?  <ImSwitch size={22}/> : <GrClose size={22} />}
     </div>
     <div className= {!lightSwitch ? 'space-x-2' : 'bg-slate-800' }>

     </div>

        </div>
        </div >
          <ul className= {!nav ? 'hidden' : 'bg-orange-100 md:ml-32' }>
            <li className='mt-8 border-solid border-b-2 border-zinc-100 hover:underline underline-offset-2 '>About Me</li>
            <li className='mt-5 border-solid border-b-2 border-zinc-100 hover:underline underline-offset-2'>Projects</li>
            <li className='mt-5 border-solid border-b-2 border-zinc-100 hover:underline underline-offset-2'>Work Experiences</li>
            <li className='mt-5 border-solid border-b-2 border-zinc-100 hover:underline underline-offset-2'>Contacts</li>
        </ul>
        </div>
  )
}

export default Navbar