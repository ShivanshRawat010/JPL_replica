import React from 'react'
import LandingPage from './Pages/LandingPage'
import Trial from './Pages/Trial'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Route, Routes } from 'react-router-dom';
import India_operation from './Pages/India_operation';
import About_us_overview from './Pages/About_us_overview';
import Leadership from './Pages/Leadership';
import Board_member from './Pages/Board_member';
import Awards from './Pages/Awards';
import Overseas_operation from './Pages/Overseas_operation';
import People_overview from './Pages/People_overview';
import JIPT from './Pages/JIPT';
import Jobs from './Pages/Jobs';
import Sustainability from './Pages/Sustainability';
import Environment from './Pages/Environment';
import Contact from './Pages/Contact';
import Disclaimer from './Pages/Disclaimer';



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
      <Route path="/people-overview" element={<People_overview />} />
      <Route path="/india-operations" element={<India_operation />} />
      <Route path="/overseas-operations" element={<Overseas_operation />} />
      <Route path="/about-us-leadership" element={<Leadership />} />
      <Route path="/board-anil-pandey" element={<Board_member id="ap"/>}/>
      <Route path="/board-om-prakash" element={<Board_member id="op"/>}/>
      <Route path="/board-shilpa-jha" element={<Board_member id="sj"/>}/>
      <Route path="/awards" element={<Awards />} />
      <Route path="/jipt" element={<JIPT />} />
      <Route path="/job-openings" element={<Jobs />} />
      <Route path="/csr-initiatives" element={<Sustainability />} />
      <Route path="/environment" element={<Environment />} />
      <Route path="https://jpl-replica.onrender.com/contact" element={<Contact />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  )
}

export default App
