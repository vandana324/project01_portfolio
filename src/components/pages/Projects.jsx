import { Camera, Settings,MessageCircle } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import { FaMobileAlt, FaDesktop, FaDollarSign } from "react-icons/fa";
import Line from '../others/line';

const project = [
  {
    id: 1,
    icon: <FaMobileAlt />,
    title: "E-Commerce Mobile App",
    description:
      "A feature-rich shopping application with seamless checkout process and real-time inventory tracking.",
    tags: ["Flutter", "Firebase", "State Management"],
    demoLink: "#",
    githubLink: "#",
    tech: "Flutter",
  },
  {
    id: 2,
    icon: <FaDesktop />,
    title: "Corporate Portal",
    description:
      "A comprehensive business management system with employee dashboard, task management, and analytics.",
    tags: ["Laravel", "MySQL", "Vue.js"],
    demoLink: "#",
    githubLink: "#",
    tech: "Laravel",
  },
  {
    id: 3,
    icon: <FaDollarSign />,
    title: "Expense Tracker",
    description:
      "A personal finance app with budget planning, expense tracking, and visual reports to help users manage finances.",
    tags: ["React Native", "Redux", "Charts"],
    demoLink: "#",
    githubLink: "#",
    tech: "React Native",
  },
  {
    id: 4,
    icon: <Settings />,
    title: "Fitness App",
    description:
      "Track workouts, nutrition, and health goals with a modern and engaging mobile app.",
    tags: ["Flutter", "API Integration"],
    demoLink: "#",
    githubLink: "#",
    tech: "Flutter",
  },
  {
    id: 5,
    icon: <Camera />,
    title: "Inventory Management",
    description:
      "Streamlined inventory tracking system for warehouses with barcode support.",
    tags: ["Django", "PostgreSQL", "Bootstrap"],
    demoLink: "#",
    githubLink: "#",
    tech: "Django",
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
