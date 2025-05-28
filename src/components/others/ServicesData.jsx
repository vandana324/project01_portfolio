function ServicesData(){
    return(
        <>
        <div className="w-120 h-90 bg-[#262626] rounded-xl">
             
             <h2 className="pt-20 text-center text-2xl text-white font-bold">Mobile App Development</h2>
             <p className="pt-5 text-white text-base text-center">Cross-platform and native mobile applications with
              <br /> beautiful UI and seamless performance.</p>

              
       <div className="flex items-center pt-10 pl-4 pr-4 gap-2">
          <div className="w-50 h-11 bg-[#3c3c3c] rounded-xl">
            <h1 className="text-blue-400 text-base text-center pt-2 ">Flutter</h1>
          </div>
          <div className="w-50 h-11 bg-[#3c3c3c] rounded-xl">
            <h1 className="text-pink-500 text-base text-center pt-2 ">React Native</h1>
          </div>
     
        </div>

         <div className="flex items-center pt-3 pl-4 pr-4 gap-2">
          <div className="w-50 h-11 bg-[#3c3c3c] rounded-xl">
            <h1 className="text-blue-400 text-base text-center pt-2 ">Java</h1>
          </div>
          <div className="w-50 h-11 bg-[#3c3c3c] rounded-xl">
            <h1 className="text-pink-500 text-base text-center pt-2 ">Kotlin</h1>
          </div>
          
        </div>
          </div>
        </>
    );
}

export default ServicesData