import RotatingText from "../others/RotatingText.jsx";
import image1 from "../others/image1.png"; 
import {
  SiHtml5,SiCss3,SiJavascript,SiReact,SiNodedotjs,SiPython,SiCplusplus,SiGit,SiMongodb,SiMysql,SiTailwindcss,SiRedux,SiTensorflow,SiPandas,
  SiNumpy,SiScikitlearn} from 'react-icons/si';


function Home(){
const skillIcons = {
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  React: <SiReact className="text-cyan-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  Python: <SiPython className="text-blue-400" />,
  "C++": <SiCplusplus className="text-indigo-400" />,
  Git: <SiGit className="text-red-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  MySQL: <SiMysql className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-500" />,
  TensorFlow: <SiTensorflow className="text-orange-400" />,
  Pandas: <SiPandas className="text-white" />,
  NumPy: <SiNumpy className="text-blue-300" />,
  ScikitLearn: <SiScikitlearn className="text-yellow-200" />
};

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "C++",
  "Git", "MongoDB", "MySQL", "Tailwind", "TensorFlow",
  "Pandas", "NumPy", "ScikitLearn"
];


  return (
    <section id="home" className="bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full bg-[#181818] py-20 overflow-x-hidden">
        
        {/* Left Side */}
        <section className="w-full md:w-1/2 pt-10 md:pt-20 md:pr-8 md:pl-4 px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent">
                vandana vaishnav
              </span>
            </h1>
            <h3 className="pt-5 text-xl md:text-2xl">Software and Full-Stack Developer</h3>
          </div>

          <div className="pt-7">
            <RotatingText />
          </div>

          <p className="pt-8 max-w-lg">
            Crafting high-performance, visually stunning applications with cutting-edge
            <br /> technologies and sleek UI/UX design.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-10 max-w-xs">
            <button className="w-full sm:w-44 h-12 bg-blue-500 text-white rounded-xl cursor-pointer p-4 shadow-[0_10px_30px_-5px_rgba(59,130,246,0.7)] flex items-center justify-center">
              <h2 className="text-base text-center mb-0">View My Projects</h2>
            </button>

            <button className="w-full sm:w-36 h-12 rounded-xl border border-pink-600 text-white cursor-pointer flex items-center justify-center">
              <h2 className="text-base text-center mb-0">Contact Me</h2>
            </button>
          </div>
        </section>

        {/* Right Side */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-6">
          <img
            src={image1}
            alt="Developer"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </section>
      </div>

      {/* Skills Section - Positioned Below */}
     <div className="w-full px-4 py-10 bg-[#181818] text-white text-center">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
    {skills.map((skill, index) => (
      <div
        key={index}
        className={`
          w-40 h-16 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl
          transition-transform duration-300
          bg-[#121212] text-white shadow-lg hover:scale-105
          ${index % 2 === 0 ? 'border border-pink-500' : 'border border-blue-500'}
        `}
      >
        {skillIcons[skill]}
        <span>{skill}</span>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}

export default Home;
