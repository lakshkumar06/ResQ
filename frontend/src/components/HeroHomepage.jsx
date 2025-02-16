import React from 'react'
import {Link} from 'react-router-dom'
const HeroHomepage = () => {
  return (
    <div className='relative h-fit'>
      <div className='absolute inset-0 '>
        <img src="./image.png" alt="" className="object-cover w-full h-full" />
      </div>
      <div className='relative py-[30vh] px-[8vw] text-white '>
        <div className="flex gap-[1em]">
            <div className="font-bold text-[120px] leading-[0.8em] flexCol">
                EVERY
            </div>
            <div className="text-[50px] leading-[1em] font-semibold flexCol">
                <p className=''>RESOURCE COUNTS</p>
                <p className="">ACTION MATTERS</p>
            </div>
        </div>
        <p className="text-[26px] py-[1em] max-w-3/5">Join ResQ to ensure no fire station stands alone in the fight against disasters</p>
        <a href="#learnMore" className="mainBtnRed text-[20px] px-[1.3em] py-[0.5em] rounded-[10px]">Learn More</a>
      </div>
    </div>
  )
}

export default HeroHomepage
