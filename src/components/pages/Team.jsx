
import React from 'react';
import TeamCard from '../TeamCard';
import { LineChart } from 'lucide-react';
import Line from '../others/line';

const teamMembers = [
  {
    name: 'Hemant',
    role: 'Laravel/PHP Developer',
    skills: ['Laravel', 'PHP'],
    description: 'Expert in building robust backend systems and RESTful APIs with Laravel and PHP.',
    social: {
      github: '#',
      linkedin: '#',
      instagram: '#'
    },
    gradient: 'bg-gradient-to-br from-blue-500 to-pink-500'
  },
  {
    name: 'Rahul',
    role: 'Laravel Developer',
    skills: ['Laravel', 'Full-Stack'],
    description: 'Passionate developer with expertise in Laravel framework and modern web development practices.',
    social: {
      github: '#',
      linkedin: '#',
      instagram: '#'
    },
    gradient: 'bg-gradient-to-br from-pink-500 to-blue-500'
  },
  {
    name: 'Suraj',
    role: 'Software Developer',
    skills: ['Java', 'Software'],
    description: 'Skilled programmer specializing in custom software solutions and application development.',
    social: {
      github: '#',
      linkedin: '#',
      instagram: '#'
    },
    gradient: 'bg-gradient-to-br from-blue-500 to-pink-500'
  },
   {
    name: 'Suraj',
    role: 'Software Developer',
    skills: ['Java', 'Software'],
    description: 'Skilled programmer specializing in custom software solutions and application development.',
    social: {
      github: '#',
      linkedin: '#',
      instagram: '#'
    },
    gradient: 'bg-gradient-to-br from-blue-500 to-pink-500'
  },
   {
    name: 'Suraj',
    role: 'Software Developer',
    skills: ['Java', 'Software'],
    description: 'Skilled programmer specializing in custom software solutions and application development.',
    social: {
      github: '#',
      linkedin: '#',
      instagram: '#'
    },
    gradient: 'bg-gradient-to-br from-blue-500 to-pink-500'
  }
];

const stats = [
  { label: 'Team Members', value: '5+', icon: '👥', color: 'text-blue-500' },
  { label: 'Projects Completed', value: '20+', icon: '💼', color: 'text-pink-500' },
  { label: 'Happy Clients', value: '15+', icon: '😊', color: 'text-blue-500' },
  { label: 'Support Available', value: '24/7', icon: '⏰', color: 'text-pink-500' }
];

const Team = () => {
  return (
    <section id="team">
    <section className="bg-[#1b1a1a] text-white py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <Line />
        <p className="text-gray-300 mt-2">Meet the talented professionals behind our exceptional work. Each member brings unique expertise to deliver quality solutions.</p>
        
      </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  {teamMembers.map((member, index) => (
    <TeamCard key={index} {...member} />
  ))}
</div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16 w-full mr-2 pr-2">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-[#303030] text-center rounded-xl p-6 shadow-md">
            <div className={`text-4xl mb-2 ${stat.color}`}>{stat.icon}</div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold">Ready to Work With Our Team?</h3>
        <p className="text-gray-400 mt-2">Let's collaborate to transform your ideas into exceptional digital experiences.</p>
        <button className="mt-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-6 rounded-full hover:opacity-90 transition">Get in Touch</button>
      </div>
    </section>
    </section>
  );
};

export default Team;
