import ServicesData from "../others/ServicesData";
import {Smartphone,Settings,ShoppingCart,MonitorSmartphone,Zap,LayoutTemplate} from "lucide-react";
import Works from "../others/Works";

  const workSection = [
    {id:1,idx:'1',title:'Discovery',desc:'Understanding your requirements and project goals through in-depth consultations.'},
    {id:2,idx:'2',title:'Planning',desc:'Creating a roadmap with milestones, technologies, and design specifications.'},
    {id:3,idx:'3',title:'Deployment',desc:'Building your solution with clean code and regular progress updates.'},
    {id:4,idx:'4',title:'Delivery',desc:'Testing, refining, and launching your product with ongoing support.'}
  ]

const description = [
  { id: 1, desc: 'Cross-platform and native mobile applications with beautiful UI and seamless performance.' },
  { id: 2, desc: 'Responsive, modern websites and web applications with focus on performance and usability.' },
  { id: 3, desc: 'Tailored software solutions designed to address your specific business challenges.' },
  { id: 4, desc: 'Complete online shopping platforms with secure payment gateways and inventory management.' },
  { id: 5, desc: 'Enhance user experience with intuitive interfaces and smooth interactions that boost engagement.' },
  { id: 6, desc: 'Ongoing technical support and maintenance to keep your applications running smoothly.' }
];

const features = [
  { id: 1, icon: <Smartphone />, name: 'Mobile App Development', description: description[0].desc, skill1: 'Flutter', skill2: 'React Native', skill3: 'Java', skill4: 'Kotlin' },
  { id: 2, icon: <MonitorSmartphone />, name: 'Web Development', description: description[1].desc, skill1: 'HTML', skill2: 'CSS', skill3: 'JavaScript', skill4: 'React' },
  { id: 3, icon: <Settings />, name: 'Custom Software', description: description[2].desc, skill1: 'Python', skill2: 'Django', skill3: 'Java', skill4: 'Node.js' },
  { id: 4, icon: <ShoppingCart />, name: 'E-commerce Solutions', description: description[3].desc, skill1: 'Shopify', skill2: 'WooCommerce', skill3: 'Stripe', skill4: 'PayPal' },
  { id: 5, icon: <LayoutTemplate />, name: 'UI/UX Design', description: description[4].desc, skill1: 'Figma', skill2: 'Adobe XD', skill3: 'Sketch', skill4: 'Framer' },
  { id: 6, icon: <Zap />, name: 'Maintenance & Support', description: description[5].desc, skill1: 'Debugging', skill2: 'Monitoring', skill3: 'Updates', skill4: 'Backup' }
];

function Services() {
  return (
    <div className="bg-[#181818] min-h-screen w-full px-10 pt-20">
      <h1 className="text-center text-5xl text-white font-bold">Services</h1>
      <p className="pt-7 text-white text-center text-base">
        Specialized services tailored to meet your digital needs with cutting-edge
        <br /> technologies and expert solutions.
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
        {features.map((item) => (
          <ServicesData
            key={item.id}
            icon={item.icon}
            name={item.name}
            description={item.description}
            skill1={item.skill1}
            skill2={item.skill2}
            skill3={item.skill3}
            skill4={item.skill4}
          />
        ))}
      </div>


      <div className="pt-20">
             <h1 className="text-white text-center font-bold text-3xl"> How We Works</h1>

             <div className=" pt-20 flex flex-wrap justify-center gap-12">
             {workSection.map((item) => (
              <Works 
              key={item.id}
              idx={item.idx}
              title={item.title}
              desc={item.desc}/>

             ))}
                
       </div>
     </div>


    <div className="w-full py-20 flex flex-col items-center justify-center gap-6">
  <h1 className="text-white text-3xl text-center font-bold">
    Ready to bring your idea to life?
  </h1>

  <button className="px-4 py-3 rounded-xl cursor-pointer text-xl  bg-gradient-to-r from-[#0246c4] to-[#bd0055] text-white hover:opacity-90 transition">
    Get Started
  </button>
</div>

    </div>
  );
}

export default Services;
