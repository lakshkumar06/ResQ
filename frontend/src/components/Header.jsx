import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='w-full py-[25px] px-[5vw] flex justify-between absolute z-1'>
        <div className=''>
          <img src="./logo.webp" alt="" className="h-[50px]" />
        </div>
        <div className="flex gap-[1em] text-[20px]">
            <Link to="/Login" className="px-[1em] py-[0.4em] bg-white text-red-900 font-medium rounded-[10px}x]">Login</Link>
            <Link to="/Signup" className="px-[1em] py-[0.4em] bg-white text-red-900 font-medium rounded-[10px]">Sign Up</Link>

        </div>
    </nav>
  )
}

export default Header
