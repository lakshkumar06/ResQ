import React, { useState } from 'react';
import SignupFS from '../components/SignupFS';
import SignupLoc from '../components/SignupLoc';

const Signup = () => {
  const [isFireStation, setIsFireStation] = useState(false); // State to track active button

  return (
    <div className="flex mx-auto">
      <div className="w-[45%] min-h-screen flexCol pl-[10vw] pr-[4vw]">
        <img src="/Untitled.webp" alt="" className="" />
      </div>
      <div className="w-[55%] min-h-screen flexCol">
        <p className="text-[28px] font-medium">Signup</p>

        {/* Buttons to toggle between Fire Station and Local Resident */}
        <div className="flex bg-red-900 w-fit rounded-[100px] p-[4px] mt-[1em]">
          <button
            className={`w-fit py-[0.5em] px-[1em] rounded-[100px] ${!isFireStation ? 'activeSignupOption' : 'text-white'}`}
            onClick={() => setIsFireStation(false)}
          >
            Local
          </button>
          <button
            className={`w-fit py-[0.5em] px-[1em] rounded-[100px] ${isFireStation ? 'activeSignupOption' : 'text-white'}`}
            onClick={() => setIsFireStation(true)}
          >
            Fire Department
          </button>
        </div>

        {/* Show respective component based on the active button */}
        {isFireStation ? <SignupFS /> : <SignupLoc />}


      </div>
    </div>
  );
};

export default Signup;
