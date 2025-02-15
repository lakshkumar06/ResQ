import React from 'react'

const Signup = () => {
  return (
    <div className='flex w-4/5 mx-auto'>
        <div className='w-1/2 min-h-screen flexCol'>
            <img src="/Untitled.webp" alt="" className="" />
        </div>
        <div className='w-1/2 min-h-screen flexCol'>
        <p className='text-[28px] font-medium'>Signup</p>

        <form className='text-[20px]'>
            <label htmlFor="" className="">Name:</label><br/>
            <input type="text" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]"/>
            <label htmlFor="" className="">Zip Code:</label><br/>
            <input type="number" className="w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]"/>
            <label htmlFor="acctype" className="">Account Type: </label> <br/>
        <select id="acctype" name="acctype" className='bw-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]'>
            <option value="food">Local Resident</option>
            <option value="medical">Fire Station</option>
        </select>
            <label htmlFor="" className=''>Email Address:</label><br/>
            <input type="email" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]'/><br/>
            <label htmlFor="" className=''>Password:</label><br/>
            <input type="password" name="" id="" className='w-full px-[2em] py-[0.5em] border-[1px] border-gray-300 px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]'/>
            <div className="flex gap-[1em] justify-end">
            <button className='mainBtnGray w-fit py-[0.5em] px-[2em] rounded-[100px] mt-[1em]'>Login</button>
                <button className='mainBtnRed w-fit py-[0.5em] px-[2em] rounded-[100px] mt-[1em]'>Sign Up</button>
            </div>
        </form>
        </div>
      
    </div>
  )
}

export default Signup
