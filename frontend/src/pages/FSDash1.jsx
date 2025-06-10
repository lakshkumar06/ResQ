import React, { useState } from 'react';
import FSLeftSideBar from '../components/FSLeftSideBar';
import FSDashMain from '../components/FSDashMain';
import FSRightSideBar from '../components/FSRightSideBar';
import FSVolunteers from '../components/FSVolunteers'; // Import Volunteers component

const FSDash1 = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard'); // Default to Dashboard

  return (
    <div className='flex'>
      <FSLeftSideBar1 setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
      {selectedSection === 'volunteer' ? <FSVolunteers /> : <FSDashMain1 />}
      <FSRightSideBar1 />
    </div>
  );
};

export default FSDash1;

