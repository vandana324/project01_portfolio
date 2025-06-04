import { LocateIcon, MessageCircle, PhoneCall } from 'lucide-react';
import React from 'react';
import { FaInstagram,FaGithub,FaLinkedin,FaWhatsapp,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#151515] text-white py-8 w-full">
  <div className="w-full container grid lg:grid-cols-4 justify-between">

    {/* Personal Info */}
    <div className="w-full flex flex-col items-center px-15 lg:items-start">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent mb-2">Vandana Vaishnav</h2>
      <p className="text-gray-400 text-sm mb-4 text-center lg:text-left">
        Aspiring Software Developer & Full-Stack Web Developer focused on building impactful projects and mastering modern technologies.
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/vandana324" className="hover:text-purple-500"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vandanavaishnav/" className="hover:text-purple-500"><FaLinkedin /></a>
        <a href="#" className="hover:text-purple-500"><FaInstagram /></a>
        <a href="#" className="hover:text-purple-500"><FaTwitter /></a>
        
      </div>
    </div>

    {/* Links Section */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 max-w-md mx-auto">
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent mb-2">Quick Links</h3>
        <ul className=" text-gray-400 space-y-1 text-center md:text-left">
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  Home</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  About</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  Services</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  Projects</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  Team</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  Contact</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-blue-600 text-2xl'>{'\u203A'}</span>  PrivacyPolicy</a></li>
        </ul>
      </div>
      </div>

      <div className="flex flex-col items-center md:items-start w-full">
        <h3 className="text-lg font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent mb-2">Services</h3>
        <ul className= "text-gray-400 space-y-1 text-center md:text-left">
          <li><a href="#" className="hover:text-pink-500"><span className='text-2xl text-pink-600'>{'\u203A'}</span>  Mobile App Development</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-2xl text-pink-600'>{'\u203A'}</span>  Web Development</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-pink-600 text-2xl'>{'\u203A'}</span>  Custom Software Solutions</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-pink-600 text-2xl'>{'\u203A'}</span>  UI/UX Optimization</a></li>
          <li><a href="#" className="hover:text-pink-500"><span className='text-pink-600 text-2xl'>{'\u203A'}</span>  E-Commerce Solutions</a></li>
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent mb-2">Contact Us</h3>
        <p className='text-gray-400 flex gap-1'><PhoneCall />+91 9680088010</p>
        <p className='text-gray-400 flex gap-1'><MessageCircle />vandanaramawat04@gmail.com</p>
        <p className='text-gray-400 flex gap-1'><LocateIcon />Jaipur, India</p>

        <div className="mt-4 w-full">
          <h3 className="text-lg font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent mb-2">Subscribe to Newsletter</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 rounded-l-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow" 
            />
            <button className="bg-purple-500 mr-6 text-white px-4 rounded-r-lg hover:bg-purple-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

<footer className="bg-[#151515] text-gray-300 px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        
        {/* Right Side */}
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
          <a href="/terms" className="hover:underline text-sm">Terms of Use</a>
          <a href="/contact" className="hover:underline text-sm">Contact</a>
        </div>
      </div>
    </footer>
  
</footer>

    );
};

export default Footer;
