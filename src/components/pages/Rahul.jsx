import Home from './Home';     
import React from 'react';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Team from './Team';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

function Rahul() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#181818] text-white">
      <Home />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Rahul;
