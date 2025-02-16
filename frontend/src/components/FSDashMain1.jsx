import React from 'react'
import { Link } from 'react-router-dom'
import FSMap from './FSMap'

const FSDashMain = () => {
  return (
    <div className='w-1/2 h-screen overflow-y-scroll no-scrollbar'>
      <div className="p-[50px] bg-red-900 text-white">
        <p className='text-[20px]'>
          Welcome,
        </p>
        <p className='text-[40px] font-semibold'>
            Norman Fire Department Fire Station 2

        </p>
      </div>

      <div className="p-[2vw]">
        <div className="flex gap-[1em]">
          
          <Link to={'/FireDepts/Norman2/Request'} className='w-1/2 mainBtn mainBtnGray flex gap-[1em]'><span className='flexCol'>
            <svg height="60" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_23_190)">
<path d="M58.2188 0H10.7812C7.92188 0 5.17963 1.13588 3.15776 3.15776C1.13588 5.17963 0 7.92188 0 10.7812V45.2812C0 48.1406 1.13588 50.8829 3.15776 52.9047C5.17963 54.9266 7.92188 56.0625 10.7812 56.0625H12.9375V66.8438C12.9376 67.2704 13.0642 67.6875 13.3014 68.0422C13.5386 68.3968 13.8757 68.6731 14.2701 68.8361C14.5309 68.9454 14.811 69.0012 15.0938 69C15.3771 69.0005 15.6578 68.9452 15.9197 68.8371C16.1817 68.7291 16.4198 68.5705 16.6204 68.3704L28.9239 56.0625H58.2188C61.0781 56.0625 63.8204 54.9266 65.8422 52.9047C67.8641 50.8829 69 48.1406 69 45.2812V10.7812C69 7.92188 67.8641 5.17963 65.8422 3.15776C63.8204 1.13588 61.0781 0 58.2188 0ZM64.6875 45.2812C64.6875 46.9969 64.006 48.6422 62.7928 49.8553C61.5797 51.0685 59.9344 51.75 58.2188 51.75H28.0312C27.7479 51.7495 27.4672 51.8048 27.2053 51.9129C26.9433 52.0209 26.7052 52.1795 26.5046 52.3796L17.25 61.6386V53.9062C17.25 53.3344 17.0228 52.7859 16.6185 52.3815C16.2141 51.9772 15.6656 51.75 15.0938 51.75H10.7812C9.06563 51.75 7.42028 51.0685 6.20716 49.8553C4.99403 48.6422 4.3125 46.9969 4.3125 45.2812V10.7812C4.3125 9.06563 4.99403 7.42028 6.20716 6.20715C7.42028 4.99403 9.06563 4.3125 10.7812 4.3125H58.2188C59.9344 4.3125 61.5797 4.99403 62.7928 6.20715C64.006 7.42028 64.6875 9.06563 64.6875 10.7812V45.2812ZM55.8986 28.8549C55.7881 29.117 55.6286 29.3556 55.4286 29.5579L46.8036 38.1829C46.3995 38.586 45.852 38.8124 45.2812 38.8125C44.9979 38.813 44.7172 38.7577 44.4553 38.6496C44.1933 38.5416 43.9552 38.383 43.7546 38.1829C43.5538 37.9826 43.3945 37.7446 43.2858 37.4827C43.1771 37.2207 43.1211 36.9399 43.1211 36.6562C43.1211 36.3726 43.1771 36.0918 43.2858 35.8298C43.3945 35.5679 43.5538 35.3299 43.7546 35.1296L48.7011 30.1875H28.0312C26.3156 30.1875 24.6703 30.869 23.4572 32.0822C22.244 33.2953 21.5625 34.9406 21.5625 36.6562C21.5625 37.2281 21.3353 37.7766 20.931 38.181C20.5266 38.5853 19.9781 38.8125 19.4062 38.8125C18.8344 38.8125 18.2859 38.5853 17.8815 38.181C17.4772 37.7766 17.25 37.2281 17.25 36.6562C17.25 33.7969 18.3859 31.0546 20.4078 29.0328C22.4296 27.0109 25.1719 25.875 28.0312 25.875H48.7011L43.7546 20.9329C43.5538 20.7326 43.3945 20.4946 43.2858 20.2327C43.1771 19.9707 43.1211 19.6899 43.1211 19.4062C43.1211 19.1226 43.1771 18.8418 43.2858 18.5798C43.3945 18.3179 43.5538 18.0799 43.7546 17.8796C43.9549 17.6788 44.1929 17.5195 44.4548 17.4108C44.7168 17.3021 44.9976 17.2461 45.2812 17.2461C45.5649 17.2461 45.8457 17.3021 46.1077 17.4108C46.3696 17.5195 46.6076 17.6788 46.8079 17.8796L55.4329 26.5046C55.6329 26.7069 55.7924 26.9455 55.9029 27.2076C56.1173 27.7361 56.1157 28.3276 55.8986 28.8549Z" fill="#750000" stroke="#750000"/>
</g>
<defs>
<clipPath id="clip0_23_190">
<rect width="69" height="69" fill="white"/>
</clipPath>
</defs>
</svg>
</span><span className="flexCol">Request Supplies</span> </Link>
          <Link to={''} className='w-1/2 mainBtn mainBtnRed flex gap-[1em]'><span className='text-[60px]'>+</span><span className="flexCol">Create an Emergency</span> </Link>

        </div>
        <FSMap/>
      </div>
    </div>
  )
}

export default FSDashMain
