import React from 'react'
import AboutCard from '../AboutCard'
import { Briefcase, Zap, Lightbulb, Clock } from "lucide-react";
import Line from '../others/line';
import image2 from '../others/image2.png';

const skillsData = [
  { id: 1, bgColor: 'bg-[#3F4E66]', letterColor: 'text-[#3A83F7]', letter: 'C', name: 'C++' },
  { id: 2, bgColor: 'bg-[#663349]', letterColor: 'text-[#FF006E]', letter: 'R', name: 'React JS' },
  { id: 3, bgColor: 'bg-[#3F4E66]', letterColor: 'text-[#3A83F7]', letter: 'N', name: 'Node JS' },
  { id: 4, bgColor: 'bg-[#663349]', letterColor: 'text-[#FF006E]', letter: 'T', name: 'Tailwind' },
  { id: 5, bgColor: 'bg-[#3F4E66]', letterColor: 'text-[#3A83F7]', letter: 'M', name: 'Mongo DB' },
  { id: 6, bgColor: 'bg-[#663349]', letterColor: 'text-[#FF006E]', letter: 'R', name: 'Rest API' },
];

const featuresData = [
  { id: 1, icon: Briefcase, iconBg: 'bg-[#3F4E66]', iconColor: 'text-blue-400', title: 'Experience', desc: '1+ years in Full-Stack Development' },
  { id: 2, icon: Zap, iconBg: 'bg-[#511E34]', iconColor: 'text-[#FF006E]', title: 'Fast Delivery', desc: 'Quick turnaround time on projects' },
  { id: 3, icon: Lightbulb, iconBg: 'bg-[#3F4E66]', iconColor: 'text-blue-400', title: 'Creative Solutions', desc: 'Innovative approaches to problems' },
  { id: 4, icon: Clock, iconBg: 'bg-[#511E34]', iconColor: 'text-[#FF006E]', title: 'Timely Support', desc: 'Responsive and reliable assistance' },
];

const About = () => {
  return (
    
    <section id="about">
      <div className='px-4 pt-10 w-full min-h-screen bg-[#262626]'>
        {/* top portion */}
        <div className='h-[140px] w-full bg-[#262626] flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl font-semibold '>About Me</h1>
          <Line />
          <p className='text-[#D4D4C4] mt-2'>Get to know me better and see how I can help bring your digital ideas to life.</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-2'>
          <div className='h-[270px] w-[270px] rounded-xl ml-28 bg-amber-50 mt-[120px]'></div>
          <div className=' min-h-screen bg-[#262626] mr-6'>
            <h1 className='text-white text-[28px] font-semibold '>Software & Full-Stack Developer</h1>
            <p className='text-white mt-4'>Hi, I’m Vandana, a dedicated Software and Full-Stack Developer with a strong foundation in building efficient and scalable web applications. With hands-on experience in React and Node.js, I specialize in creating seamless user interfaces and robust backend systems.

</p>
            <p className='text-white mt-4'>My background in C++ programming enhances my problem-solving skills and helps me write optimized, clean, and maintainable code. I’m passionate about turning complex challenges into elegant solutions and committed to delivering high-performance applications that provide excellent user experiences.</p>
            <h2 className='text-white mt-6 text-xl font-bold'>My Tech Stack</h2>

            <AboutCard skills={skillsData} features={featuresData} />
          </div>
        </div>
      </div>
   
    </section>
  )
}

export default About
