
import RotatingText from "../others/RotatingText.jsx";


function Home() {
  return (

    <div className="flex min-h-screen bg-[#181818] text-white">
      {/* Left Section */}
      <section className="w-1/2 pt-20 pr-8 pl-4 bg-[#181818]">

        <div className="pt-50">
          <h1 className="text-6xl font-bold">Hi, I'm <span className="text-6xl font-bold bg-gradient-to-r from-[#4081FA] 
  to-[#FA0472] bg-clip-text text-transparent leading-right">Rahul Singh</span></h1>
          <h3 className="pt-5 text-2xl">Full-Stack Mobile & Web Developer</h3>
        </div>

        <div className="pt-7"><RotatingText /></div>
        <p className="pt-8">Crafting high-performance, visually stunning applications with cutting-
          <br />edge technologies and sleek UI/UX design.

        </p>


        <div className="flex items-center gap-4">
  <div className="pt-10">
    <div className="w-44 h-12 bg-blue-500 text-white rounded-xl cursor-pointer p-4 shadow-[0_10px_30px_-5px_rgba(59,130,246,0.7)] flex items-center justify-center">
      <h2 className="text-base text-center mb-0">View My Projects</h2>
    </div>
  </div>

  <div className="pt-10">
    <div className="w-36 h-12 rounded-xl border border-pink-600 text-white cursor-pointer flex items-center justify-center">
      <h2 className="text-base text-center mb-0">Contact Me</h2>
    </div>
  </div>
</div>

      </section>



      {/* Right Section */}
      <section className="w-1/2 p-8 bg-[#181818]">

      </section>


    </div>




  );
}

export default Home;
