import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import FSDash from './pages/FSDash';
import FSRequest from './pages/FSRequest';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Homepage/>}/>
          <Route path='/FireDepts/Dashboard' element={<FSDash/>}/>
          <Route path='FireDepts/Request' element={<FSRequest/>}/>


        </Routes>
      </BrowserRouter>        
    </>
  )
}

export default App
