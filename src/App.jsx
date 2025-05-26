import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Home from './components/pages/Home.jsx';
import Projects from './components/pages/Projects.jsx';
import Servies from './components/pages/Services.jsx';
import Team from './components/pages/Team.jsx';
import Testimonial from './components/pages/Testimonial.jsx';


function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar />
      <Routes>
     
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Serives" element={<Servies />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

