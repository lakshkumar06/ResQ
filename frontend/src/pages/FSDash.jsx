import React, { useState } from 'react';
import FSLeftSideBar from '../components/FSLeftSideBar';
import FSDashMain from '../components/FSDashMain';
import FSRightSideBar from '../components/FSRightSideBar';
import FSVolunteers from '../components/FSVolunteers'; // Import Volunteers component

const FSDash = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard'); // Default to Dashboard

  return (
    <div className='flex'>
      <FSLeftSideBar setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
      {selectedSection === 'volunteer' ? <FSVolunteers /> : <FSDashMain />}
      <FSRightSideBar />
    </div>
  );
};

export default FSDash;

