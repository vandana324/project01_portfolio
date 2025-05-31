

import React from 'react';

const TeamCard = ({ name, role, skills, description, social, gradient }) => {
  return (
    <div className="bg-[#222121] rounded-xl shadow-lg overflow-hidden h-full flex flex-col justify-between">

      <div className={`p-10 text-white text-center ${gradient}`}>
        <div className="text-6xl mb-4">👤</div>
        <div className="flex justify-center flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-black/40 text-white text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
        <p className="text-pink-500 font-semibold mb-2">{role}</p>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex justify-center gap-4 text-white">
          {social.github && <a href={social.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>}
          {social.linkedin && <a href={social.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>}
          {social.instagram && <a href={social.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;