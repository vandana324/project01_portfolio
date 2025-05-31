import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Rahul from './components/pages/Rahul.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Home from './components/pages/Home.jsx';
import Projects from './components/pages/Projects.jsx';
import Services from './components/pages/Services.jsx';  
import Team from './components/pages/Team.jsx';
import Testimonial from './components/pages/Testimonial.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rahul />} />
        <Route path="/Rahul" element={<Rahul />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
