import React from 'react'
import { Link } from 'react-router-dom'


const FSRequest = () => {
  return (
    <div className='px-[20%] bg-white '>
      <p className="text-[32px] font-semibold mt-[50px]">Request Supplies</p>
      <form className=' itemsForm'>
        <label htmlFor="item" className="">Type of assitance: </label> <br/>
        <select id="cars" name="item" className='border-[1px] border-black px-[2em] py-[0.5em] w-full rounded-[15px] my-[15px]'>
            <option value="food">Medical Assistance</option>
            <option value="medical">Food Supplies</option>
        </select>
        <label htmlFor="quantity" className="">Quantity: </label> <br/>
        <input type='text' id='quantity' className=''></input>
        <label htmlFor="quantity" className="">Area: </label> <br/>
        <input type='text' id='area' className=''></input>
        <div className="flex justify-end gap-[2vw]">
          <Link to={'/'} className='mainBtnGray px-[1em] py-[0.5em] rounded-[10px]'>Dashboard</Link>
          <button type='submit' className='mainBtnRed px-[1em] py-[0.5em] rounded-[10px]'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FSRequest
