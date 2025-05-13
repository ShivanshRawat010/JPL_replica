import React from 'react'
import LandingPage from './Pages/LandingPage'
import Trial from './Pages/Trial'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Route, Routes } from 'react-router-dom';
import India_operation from './Pages/India_operation';
import About_us_overview from './Pages/About_us_overview';
import Leadership from './Pages/Leadership';



const App = () => {

  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);

  }, []);
  
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/trial" element={<Trial />} /> */}
      <Route path="/about-us-overview" element={<About_us_overview />} />
      <Route path="/india-operations" element={<India_operation />} />
      <Route path="/about-us-leadership" element={<Leadership />} />
    </Routes>
  )
}

export default App
