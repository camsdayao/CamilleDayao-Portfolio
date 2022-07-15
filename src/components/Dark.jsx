
import {ImSwitch} from 'react-icons/im';
import {GrClose} from 'react-icons/gr';
import React, { useState } from 'react'

const Dark = () => {
  const [lightSwitch, setNav] = useState(false)
  const darkmodeClick = () => setNav(!lightSwitch)
  return (
    <div >
     <div className='flex-container mt-10 mb-4 grid justify-end mr-24 cursor-pointer' onClick={darkmodeClick}>
      {!lightSwitch ?  <ImSwitch size={22}/> : <GrClose size={22} />}
     </div>
     <div className= {!lightSwitch ? 'none' : 'bg-slate-800' }>

     </div>
    </div>
  )
}

export default Dark
