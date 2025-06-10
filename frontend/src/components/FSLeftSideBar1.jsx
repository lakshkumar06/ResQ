import React from 'react'

const FSLeftSideBar1 = ({  setSelectedSection, selectedSection  }) => {
  return (
    <div className='w-1/5 h-screen bg-gray-100 px-[20px] py-[20px] flex flex-col justify-between sticky'>
      <div>
          <div className="flex bg-[#750000] w-full p-[6px] rounded-[100px] gap-[10px]">
          <img src="" alt="" className="w-[60px] h-[60px] rounded-[40px] bg-gray-200"  />
          <div className="flexCol">
              <p className='text-white text-[18px]'>Norman Fire Station 2</p>
              <p className='text-white text-[14px] underline leading-[1em]'>blah@blah.com</p>
          </div>

        </div>

          <div className="font-light text-[20px]  mt-[2em]">
    <button 
            className={`pl-[1.5em] block py-[0.5em] w-full text-left px-[10px]  rounded-[100px] 
              ${selectedSection === 'dashboard' ? 'bg-[#750000] text-white' : 'bg-transparent text-black'}`}
            onClick={() => setSelectedSection('dashboard')}
          >
            Dashboard
          </button>

          <button 
            className={`pl-[1.5em] block py-[0.5em] w-full text-left px-[10px] rounded-[100px] 
              ${selectedSection === 'volunteer' ? 'bg-[#750000] text-white' : 'bg-transparent text-black'}`}
            onClick={() => setSelectedSection('volunteer')}
          >
            Volunteers
          </button>
        </div>
      </div>


      <div className='flex justify-center gap-[1em]'>
        <div><svg  className="w-[50px]" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.1667 12.0909V7.125C22.1667 6.68778 21.8122 6.33333 21.375 6.33333H7.12501C6.68779 6.33333 6.33334 6.68778 6.33334 7.125V30.875C6.33334 31.3122 6.68779 31.6667 7.12501 31.6667H21.375C21.8122 31.6667 22.1667 31.3122 22.1667 30.875V25.909" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8333 19H33.25M33.25 19L28.5006 13.4583M33.25 19L28.5 24.5417" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div className='flexCol '>
            <p className="text-[20px] font-light ">Sign Out</p>
        </div>
      </div>
    </div>
  )
}

export default FSLeftSideBar1
