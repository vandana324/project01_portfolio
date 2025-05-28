import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="fixed w-full bg-[#181818] text-white p-4 shadow-md p-4">
                <div className="flex justify-between items-center">
       
        <div className="text-2xl font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent leading-right">
         <Link to="/Rahul" className="">Rahul Singh</Link>
        </div>
      <div className="flex gap-5 font-small text-white text-lg text-base">
        <Link to="/Home" className="hover:text-pink-600">Home</Link>
        <Link to="/About" className="hover:text-pink-600">About</Link>
        <Link to="/Services" className="hover:text-pink-600">Services</Link>
        <Link to="/Projects" className="hover:text-pink-600">Projects</Link>
        <Link to="/Team" className="hover:text-pink-600">Team</Link>
        <Link to="/Testimonial" className="hover:text-pink-600">Testimonial</Link>
        <Link to="/Contact" className="hover:text-pink-600">Contact</Link>
      </div>
      </div>
    </nav>
        </>
    );
}

export default Navbar;