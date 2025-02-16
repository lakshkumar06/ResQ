import React from 'react'

const SignupFS = () => {
  return (
    <div className='pr-[10vw]'>
      <form className='signupForm text-[20px] py-[50px]' method='POST'>
            <label htmlFor="" className="">FS Name:</label><br/>
            <input type="text" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[10px]"/>
            <label htmlFor="" className="">Zip Code:</label><br/>
            <input type="number" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[10px]"/>
            <label htmlFor="" className=''>Email Address:</label><br/>
            <input type="email" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[10px]'/><br/>
            <label htmlFor="" className=''>Password:</label><br/>
            <input type="password" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[10px]'/>
            <div className="flex gap-[1em] justify-end">
            <button className='mainBtnGray w-fit py-[0.5em] px-[2em] rounded-[100px] mt-[1em]'>Login</button>
                <button className='mainBtnRed w-fit py-[0.5em] px-[2em] rounded-[100px] mt-[1em]'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignupFS
