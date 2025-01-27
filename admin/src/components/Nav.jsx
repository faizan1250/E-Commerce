import React from 'react'
import {assets} from '../assets/assets'

const Nav = ({ setToken }) => {
  return (
    <div className='flex items-center justify-between px-[4%] py-2'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Log out</button>
    </div>
  )
}

export default Nav
