const ProjectCard = ({ icon, title, description, tags, demoLink, githubLink, tech }) => {
  return (
    <div className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-md w-full md:w-[30%]">
      <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-10 flex items-center justify-center relative">
        <span className="text-white text-4xl">{icon}</span>
        <span className="absolute top-2 right-2 bg-[#1f1f1f] text-white text-xs px-2 py-1 rounded-full">
          {tech}
        </span>
      </div>
      <div className="p-5">
        <h2 className="text-white font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#3d3d3d] text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm font-medium">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Live Demo 
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-pink-400">
            GitHub 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;