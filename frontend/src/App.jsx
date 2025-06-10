import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import FSDash from './pages/FSDash';
import FSRequest from './pages/FSRequest';
import LocDash from './pages/LocDash';
import LocSupply from './pages/LocSupply';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FSDash1 from './pages/FSDash1';
import FSRequest1 from './pages/FSRequest1';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Homepage/>}/>
          <Route path='/FireDepts/Dashboard/Norman1' element={<FSDash/>}/>
          <Route path='/FireDepts/Dashboard/Norman2' element={<FSDash1/>}/>
          <Route path='FireDepts/Norman1/Request' element={<FSRequest/>}/>
          <Route path='FireDepts/Norman2/Request' element={<FSRequest1/>}/>
          <Route path='/Locals/Dashboard' element={<LocDash/>}/>
          <Route path='/Locals/Supply' element={<LocSupply />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>        
    </>
  )
}

export default App
