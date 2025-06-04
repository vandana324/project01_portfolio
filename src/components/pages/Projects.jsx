import { Camera, Settings,MessageCircle, WholeWord, Settings2Icon, SearchCheckIcon } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import { FaMobileAlt, FaDesktop, FaDollarSign, FaResolving } from "react-icons/fa";
import Line from '../others/line';
import { SiStaffbase } from 'react-icons/si';

const project = [
  {
    id: 1,
    icon: <SiStaffbase />,
    title: "StaffTrack",
    description:
      "StaffTrack is a web app for managing employee details with Supports add, edit, delete, and view operations",
    tags: ["React", "Tailwind", "State Management"],
    demoLink: "https://thunderous-froyo-110127.netlify.app/",
    githubLink: "https://github.com/vandana324/Employee_management_system",
    tech: "React",
  },
  {
    id: 2,
    icon: <SearchCheckIcon />,
    title: "Sorting Visualizer",
    description:
      "Sorting Visualizer is a Html , Css and Javascript web app that visually demonstrates how sorting algorithms work in real time. ",
    tags: ["HTML/CSS", "Javascript", "DSA"],
    demoLink: "https://vandana324.github.io/sorting-visualizer/",
    githubLink: "https://github.com/vandana324/sorting-visualizer",
    tech: "JavaScript",
  },
  {
    id: 3,
    icon: <Settings2Icon />,
    title: "Laptop Price Pridiction",
    description:
      "A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances.",
    tags: ["Machine Learing", "StreamLit", "Alogorithm"],
    demoLink: "https://laptoppriceprediction-8bespzsezxbjneeprvg7eh.streamlit.app/",
    githubLink: "https://github.com/vandana324/laptop_price_prediction",
    tech: "Machine Learing",
  },
  {
    id: 4,
    icon: <FaResolving />,
    title: "AI-Code-Reviewer",
    description:
      "A full-stack AI-powered code reviewer tool that lets developers get detailed feedback on their code using Google Gemini AI",
    tags: ["React", "API Integration","Node JS"],
    demoLink: "https://6835b84d77edb80bd5fdc7ac--poetic-flan-308f03.netlify.app/",
    githubLink: "https://github.com/vandana324/AI_Powered_Code_Reviewer",
    tech: "React",
  },
  {
    id: 5,
    icon: <WholeWord />,
    title: "World Atlas",
    description:
      "World Atlas is a React-based interactive map app displaying countries, flags, and basic info using public APIs",
    tags: ["React", "API integration", "Node"],
    demoLink: "https://dazzling-starburst-493c58.netlify.app/",
    githubLink: "https://github.com/vandana324/world_atlas",
    tech: "React",
  },
  {
    id: 6,
    icon: <MessageCircle />,
    title: "Crypto Wallet",
    description:
      "Secure wallet application for cryptocurrency transactions and balance tracking.",
    tags: ["React Native", "Blockchain", "Security"],
    demoLink: "#",
    githubLink: "#",
    tech: "React Native",
  },
];

const Projects = () => {
  return (
    <section id="projects" >
     <section className="py-25 px-6 bg-[#303030]">
      <h1 className="text-white text-4xl font-bold text-center mb-3">
        Projects 
      </h1>
      <Line />
      <p className="text-gray-400 text-center mb-10">
        Explore my latest work and see how I bring ideas to life with code and creativity.
      </p>

      <div className="flex flex-wrap gap-6 justify-center items-start">
        {project.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
    </section>
  );
};

export default Projects;
