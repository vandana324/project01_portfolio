const ServicesData = ({ icon, name, description, skill1, skill2, skill3, skill4 }) => {
  return (
    <div className="w-full h-full bg-[#262626] rounded-xl p-6 flex flex-col justify-start items-center">
      <div className="text-pink-600 w-16 h-16 rounded-full flex items-center justify-center bg-[#8e6f84] shadow-pink-400 ">{icon}</div>
      <h2 className="pt-4 text-2xl text-white font-bold text-center">{name}</h2>
      <p className="pt-4 text-gray-400 text-base text-center">{description}</p>

      
      <div className="grid grid-cols-2 gap-3 pt-6 w-full">
        <div className="h-11 bg-[#3c3c3c] rounded-xl flex items-center justify-center">
          <h1 className="text-blue-500 text-base">{skill1}</h1>
        </div>
        <div className="h-11 bg-[#3c3c3c] rounded-xl flex items-center justify-center">
          <h1 className="text-pink-500 text-base">{skill2}</h1>
        </div>
        <div className="h-11 bg-[#3c3c3c] rounded-xl flex items-center justify-center">
          <h1 className="text-blue-500 text-base">{skill3}</h1>
        </div>
        <div className="h-11 bg-[#3c3c3c] rounded-xl flex items-center justify-center">
          <h1 className="text-pink-500 text-base">{skill4}</h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesData;
