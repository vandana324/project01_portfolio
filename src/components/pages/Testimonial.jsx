import React, { useState } from "react";

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
   <div className="bg-[#303030] min-h-screen flex flex-col justify-center items-center px-4 pt-24">
  <h1 className="text-white text-4xl font-bold text-center mb-3">
    Testimonial
  </h1>
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

    </>
  );
};

export default Testimonial;
