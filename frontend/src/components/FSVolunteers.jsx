import React from 'react'
import Volunteers from '../json/volunteers.json'

const FSVolunteers = () => {
  return (
    <div className='w-1/2 px-[3vw] py-[50px] h-screen overflow-y-scroll no-scrollbar'>
      <p className='text-[32px]'>Volunteers</p>

      <div className=''>
        {Volunteers.map((volunteer, index) => (
          <div key={index} className='flex justify-between border-b-[1px] border-gray-200 py-[1em]'>
            <div className="">
              <p className='text-[20px] font-medium'>{volunteer.name}</p>
              <p className=''>{volunteer.age} years old</p>
            </div>
            <div className='flexCol'>
              <p className='px-[1em] py-[0.3em] rounded-[100px] bg-[#FFB4B4] h-fit m-0'>{volunteer.assistance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FSVolunteers