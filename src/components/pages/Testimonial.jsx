import React, { useState } from "react";
import Line from "../others/line";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechInnovate",
    shortName: "JD",
    content:
      "Rahul and his team delivered an exceptional mobile application that exceeded our expectations. The UI is sleek, the performance is outstanding, and the user feedback has been overwhelmingly positive. Their communication throughout the project was excellent.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, WebSolutions",
    shortName: "JS",
    content:
      "The solutions provided were top-notch and really helped streamline our processes. Communication was clear and timely throughout the project.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Founder, StartupX",
    shortName: "MJ",
    content:
      "Professional team and great support. The app they built is already gaining traction among our users.",
  },
];

const Testimonial = () => {


   const companies = [
    { name: 'TechCorp', color: 'bg-blue-400' },
    { name: 'Innovex', color: 'bg-pink-400' },
    { name: 'DigiTrend', color: 'bg-blue-400' },
    { name: 'NextWave', color: 'bg-pink-400' },
    { name: 'FutureLab', color: 'bg-blue-400' },
  ];

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { shortName, name, role, content } = testimonials[index];

  return (
    <>
    <section id="testimonial" >
   <div className="bg-[#1e1e1e] min-h-screen flex flex-col justify-center items-center px-4 py-10">
  <h1 className="text-white text-4xl font-bold text-center">Testimonial</h1>
  <Line />
  <p className="text-gray-400 text-center mb-10 max-w-xl">
    What our clients say about our expertise and delivered solutions.
  </p>

  <div className="relative w-full max-w-3xl">
    
    <button
  onClick={prevTestimonial}
  className="absolute -left-14 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white text-2xl p-2 rounded-full transition duration-200"
>
  &#8592;
</button>


   
    <div className="w-full p-8 bg-[#343333] rounded-2xl shadow-xl text-white text-left">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xl">
          {shortName}
        </div>
        
      </div>
      <p className="mb-4 text-gray-300 italic text-lg leading-relaxed">"{content}"</p>
      <div>
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
    </div>

   
   <button
  onClick={nextTestimonial}
  className="absolute -right-14 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-500 text-white text-2xl p-2 rounded-full transition duration-200"
>
  &#8594;
</button>

  </div>
</div>

 <div className="bg-[#1f1f1f] text-white px-4 py-30 text-center">
      <h2 className="text-xl font-semibold mb-8">Trusted by Companies Worldwide</h2>
      
      <div className=" flex-wrap justify-center w-full grid grid-cols-5 gap-6 mb-16">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`px-6 py-2 gap-5 rounded shadow-md ${company.color} text-white font-semibold`}
          >
            {company.name}
          </div>
        ))}
      </div>

      <div className="pt-10 bg-gradient-to-r from-blue-900 to-pink-900 p-10 rounded-2xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
        <p className="mb-6 text-gray-300">
          Join our satisfied clients and let us bring your digital ideas to life with our expertise and creativity.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold px-6 py-2 rounded shadow hover:scale-105 transition">
            Contact Us Today
          </button>
          <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow hover:scale-105 transition">
            Explore Projects
          </button>
        </div>
      </div>
    </div>

</section>
    </>
  );
};

export default Testimonial;
