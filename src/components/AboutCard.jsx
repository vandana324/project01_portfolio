import React from 'react'
import { Briefcase, Zap, Lightbulb, Clock } from "lucide-react";

const AboutCard = ({ skills, features }) => {
  return (
    <div>
      <div className='flex gap-2 flex-wrap'>
        {skills.map(({id, bgColor, letterColor, letter, name}) => (
          <div key={id} className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
            <div className={`h-[40px] flex justify-center items-center w-10 rounded-4xl ${bgColor}`}>
              <h3 className={`font-semibold ${letterColor} text-xl`}>{letter}</h3>
            </div>
            <h1 className='pl-4 text-white pt-1 text-xl'>{name}</h1>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {features.map(({id, icon: Icon, iconBg, iconColor, title, desc}) => (
          <div key={id} className='h-17 w-83 bg-[#262626] p-2 flex'>
            <div className={`h-12 w-12 rounded-4xl p-3 ${iconBg}`}>
              <Icon className={iconColor} />
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-semibold text-white'>{title}</h2>
              <p className='text-[#9A9A9A]'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutCard;
