import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Aboutpages } from './components/pages/Aboutpages';
import { Todopages } from './components/pages/Todospages';




const App: React.FC =()=> {
  return <>
  <BrowserRouter>
  <Navbar/>
<div className='container'>
  <Routes>
<Route element={<Todopages/>} path='/' />
  <Route element={<Aboutpages/>} path='/about'/>
  </Routes>




</div>
  </BrowserRouter>

  
  </>
 
  
}

export default App;
