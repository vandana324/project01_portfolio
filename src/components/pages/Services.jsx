import ServicesData from "../others/ServicesData";

function Services() {
  return (
    <>
      <div className="bg-[#181818] min-h-screen w-full">
        <div className="pt-20">
          <h1 className="text-center text-5xl text-white font-bold">Services</h1>
          <p className="pt-7 text-white text-center text-base">
            Specialized services tailored to meet your digital needs with cutting-edge
            <br /> technologies and expert solutions.
          </p>
        </div>

        <div className="flex items-center pt-10 pl-10 pr-10 gap-5">
          <div className="w-120 h-90 bg-[#262626] rounded-xl">
             
             <ServicesData />
          </div>
          <div className="w-120 h-90 bg-[#262626] rounded-xl">
            <ServicesData />
          </div>
          <div className="w-120 h-90 bg-[#262626] rounded-xl">
            <ServicesData />
          </div>
        </div>

        <div className="flex items-center pt-10 pl-10 pr-10 gap-5">
          <div className="w-120 h-90 bg-[#262626] rounded-xl">
            <ServicesData />
          </div>
          <div className="w-120 h-90 bg-[#262626] rounded-xl">
            <ServicesData />
          </div>
          <div className="w-120 h-90 bg-[#262626] rounded-xl">
            <ServicesData />
          </div>
        </div>

      </div>
    </>
  );
}

export default Services