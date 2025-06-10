import React, { useState } from 'react';
import LocLeftSideBar from '../components/LocLeftSideBar'
import LocDashMain from '../components/LocDashMain';
import LocRightSideBar from '../components/LocRightSideBar';
import FSRequest from './FSRequest';
import LocRequests from '../components/LocRequests';
const LocDash = () => {
    const [selectedSection, setSelectedSection] = useState('dashboard'); // Default to Dashboard
    
  return (
    <div className='flex'>
    <LocLeftSideBar setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
    {selectedSection === 'requests' ? <LocRequests /> : <LocDashMain />}

    <LocRightSideBar/>
    </div>
  )
}

export default LocDash
