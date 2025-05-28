import React from 'react'
import AboutCard from '../AboutCard'
import { Briefcase, Zap, Lightbulb, Clock } from "lucide-react";

const skillsData = [
  { id: 1, bgColor: 'bg-[#3F4E66]', letterColor: 'text-[#3A83F7]', letter: 'F', name: 'Flutter' },
  { id: 2, bgColor: 'bg-[#663349]', letterColor: 'text-[#FF006E]', letter: 'R', name: 'React Native' },
  { id: 3, bgColor: 'bg-[#3F4E66]', letterColor: 'text-[#3A83F7]', letter: 'J', name: 'Java' },
  { id: 4, bgColor: 'bg-[#663349]', letterColor: 'text-[#FF006E]', letter: 'K', name: 'Kotlin' },
  { id: 5, bgColor: 'bg-[#3F4E66]', letterColor: 'text-[#3A83F7]', letter: 'L', name: 'Laravel' },
  { id: 6, bgColor: 'bg-[#663349]', letterColor: 'text-[#FF006E]', letter: 'P', name: 'PHP' },
];

const featuresData = [
  { id: 1, icon: Briefcase, iconBg: 'bg-[#3F4E66]', iconColor: 'text-blue-400', title: 'Experience', desc: '1+ years in Full-Stack Development' },
  { id: 2, icon: Zap, iconBg: 'bg-[#511E34]', iconColor: 'text-[#FF006E]', title: 'Fast Delivery', desc: 'Quick turnaround time on projects' },
  { id: 3, icon: Lightbulb, iconBg: 'bg-[#3F4E66]', iconColor: 'text-blue-400', title: 'Creative Solutions', desc: 'Innovative approaches to problems' },
  { id: 4, icon: Clock, iconBg: 'bg-[#511E34]', iconColor: 'text-[#FF006E]', title: 'Timely Support', desc: 'Responsive and reliable assistance' },
];

const About = () => {
  return (
    <div>
      <div className=' pt-10 w-full min-h-screen bg-[#262626]'>
        {/* top portion */}
        <div className='h-[140px] w-full bg-[#262626] flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl font-semibold '>About Me</h1>
          <p className='text-[#D4D4C4] mt-2'>Get to know me better and see how I can help bring your digital ideas to life.</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-2'>
          <div className='h-[270px] w-[270px] rounded-xl ml-28 bg-amber-50 mt-[120px]'></div>
          <div className=' min-h-screen bg-[#262626] mr-6'>
            <h1 className='text-white text-[28px] font-semibold '>Full-Stack Mobile & Web Developer</h1>
            <p className='text-white mt-4'>Hi, I'm Rahul Singh, a passionate Full-Stack Developer with over a year of experience creating high-performance applications and intuitive user interfaces. I specialize in both mobile and web development, with expertise across multiple technologies and platforms.</p>
            <p className='text-white mt-4'>My journey in software development has equipped me with the skills to turn complex problems into elegant solutions. I'm committed to writing clean, maintainable code and creating applications that not only look great but perform exceptionally well.</p>
            <h2 className='text-white mt-6 text-xl font-bold'>My Tech Stack</h2>

            <AboutCard skills={skillsData} features={featuresData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
