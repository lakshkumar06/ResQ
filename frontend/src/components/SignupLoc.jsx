import React from 'react'

const SignupLoc = () => {
  return (
    <div className='pr-[8vw]'>
      <form className='signupForm text-[20px] py-[50px]' method='POST'>

        <div className="grid grid-cols-2 gap-x-[1em] gap-y-[0.5em]">
        <div className="">
            <label htmlFor="" className="">First Name:</label><br/>
            <input type="text" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] "/>
            </div>
            <div className="">
            <label htmlFor="" className="">Last Name:</label><br/>
            <input type="text" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] "/>
            </div>
            <div className="">
              <label htmlFor="" className="">Date Of Birth:</label><br/>
              <input type="date" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] "/>
            </div>
            <div className="">
            <label htmlFor="" className="">Occupation:</label><br/>
            <input type="text" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] "/>
            </div>
            <div className="">
            <label htmlFor="" className="">Zip Code:</label><br/>
            <input type="number" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] "/>
            </div>
            <div className="">
              <label htmlFor="" className="">Phone Number:</label><br/>
              <input type="tel" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] "/>
            </div>
            <div className="">
            <label htmlFor="" className=''>Email Address:</label><br/>
            <input type="email" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] '/><br/>
            </div>
            <div className="">
            <label htmlFor="" className=''>Username:</label><br/>
            <input type="text" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] '/>
            </div>
            <div className="">
            <label htmlFor="" className=''>Password:</label><br/>
            <input type="password" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] '/>
            </div>
            <div className="">
            <label htmlFor="" className=''>Confirm Password:</label><br/>
            <input type="password" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] '/>
            </div>
        </div>


            
            
            <div className="flex gap-[1em] justify-end">
            <button className='mainBtnGray w-fit py-[0.5em] px-[2em] rounded-[100px] mt-[1em]'>Login</button>
                <a href='/Locals/Dashboard' className='mainBtnRed w-fit py-[0.5em] px-[2em] rounded-[100px] mt-[1em]'>Sign Up</a>
            </div>
        </form>
    </div>
  )
}

export default SignupLoc
