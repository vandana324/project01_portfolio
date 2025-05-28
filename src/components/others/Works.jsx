const Works = ({ id,idx, title, desc }) => {
  return (
    <div className="relative w-80 h-40 bg-[#262626] rounded-xl p-6 flex flex-col justify-start items-center pt-10">
      
      {/* ID Bubble - half outside the box */}
      <div className="absolute -top-4 bg-pink-600 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
        <h1 className="text-white text-xl font-bold">{idx}</h1>
      </div>

      <h1 className="text-white text-xl font-bold text-center mb-2">{title}</h1>
      <p className="text-gray-400 text-base text-center">{desc}</p>
    </div>
  );
};

export default Works;
