
import RotatingText from "../others/RotatingText.jsx";


function Home() {
  return (
    <section id="home" className="min-h-screen bg-black text-white">
    <div className="flex flex-col md:flex-row w-full bg-[#181818] text-white min-h-screen py-20 overflow-x-hidden">
      {/* Left Section */}
      <section className="w-full md:w-1/2 pt-20 md:pr-8 md:pl-4 bg-[#181818]">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent">
              Rahul Singh
            </span>
          </h1>
          <h3 className="pt-5 text-xl md:text-2xl">Full-Stack Mobile & Web Developer</h3>
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

      {/* Right Section */}
      <section className="w-full md:w-1/2 p-8 bg-[#181818]">
        {/* Add images or content here, make sure they are responsive */}
      </section>
    </div>
    </section>
  );
}

export default Home;