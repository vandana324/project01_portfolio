import React from 'react';

import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Line from '../others/line';
import Footer from '../pages/Footer'

const Contact = ({ contactInfo, socialLinks }) => {
  return (
    <section id="contact">
    <section className=" py-30 w-full min-h-screen p-8 bg-[#151515] text-white" id="contact">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <Line />
        <p className="text-gray-300 mt-2">Ready to discuss your project? Reach out to us for a consultation or just to say hello.</p>
        
      </div>
      <div className=" py-15 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="bg-[#222121] p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6 text-gray-300">Feel free to reach out to us through any of these channels. We're eager to hear about your project and how we can help.</p>
            <div className="space-y-4 text-gray-300">
  <div className="flex items-center gap-3">📞+91 93342 74325</div>
  <div className="flex items-center gap-3">📧 rk9600460@gmail.com</div>
  <div className="flex items-center gap-3">📍 Delhi, India</div>
</div>

          </div>

        
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Connect With Us</h3>
            <div className="flex gap-4 text-2xl">
               <a href={"#"} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
               <a href={"#"}><i className="fab fa-linkedin"></i><FaLinkedin /></a>
               <a href={"#"}><i className="fab fa-instagram"></i><FaInstagram /></a>
              <a href={"#"}><i className="fab fa-whatsapp"></i><FaWhatsapp /></a>
            </div>
          </div>

          <div className="mt-8 bg-green-700 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">WhatsApp Business</h4>
            <p className="text-sm mb-2">Get instant responses to your queries</p>
            <a href={"#"} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold">Chat Now</a>
          </div>
        </div>

  
        <div className="bg-[#222121] p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
              <input type="email" placeholder="Your Email" className="p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
            </div>
            <input type="text" placeholder="Phone Number" className="w-full p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
            <input type="text" placeholder="Subject" className="w-full p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
            <textarea placeholder="Please describe your project or inquiry..." rows="5" className="w-full p-3 bg-[#151515] border border-gray-600 rounded-lg text-white" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent" className="text-sm text-gray-300">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg font-bold hover:opacity-90">Send Message</button>
          </form>
        </div>
      </div>
      
    </section>
    </section>
  );
};

export default Contact;
