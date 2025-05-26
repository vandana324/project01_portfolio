import Button from "../button/Button.jsx";


function Home() {
  return (
    
     <div className="flex min-h-screen bg-[#181818] text-white">
  {/* Left Section */}
  <section className="w-1/2 p-8 bg-[#181818]">

  <div className="pt-60">
  <h1 className="text-6xl font-bold">Hi, I'm <span className="text-6xl font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent leading-right">Rahul Singh</span></h1>
  <h3 className="pt-7 text-2xl">Full-Stack Mobile & Web Developer</h3>
    </div>

    <h3>Crafting high-performance, visually stunning applications with cutting-edge technologies and sleek UI/UX design.</h3>


  </section>



  {/* Right Section */}
  <section className="w-1/2 p-8 bg-[#181818]">
    
  </section>


</div>



  
  );
}

export default Home;
