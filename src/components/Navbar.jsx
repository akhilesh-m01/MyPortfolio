import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Resume from "../assets/Resume_04.pdf";
import { Link } from "react-scroll";



const items = "duration-300 transition ease-in-out hover:text-blue-300 m-2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-wrap flex-row items-center justify-between m-0 bg-gradient-to-r from-gray-700 to-gray-800 p-4 text-white border-b border-slate-50 border-solid md:border-none">
      <div className="text-2xl font-bold text-blue-300">
        {" "}
        &lt; Akhilesh/ &gt;
      </div>
      <div className="md:hidden">
        {isOpen ? (
          <IoMdClose onClick={handleMenu} className="h-8 w-8" />
        ) : (
          <GiHamburgerMenu onClick={handleMenu} className="h-8 w-8" />
        )}
      </div>
      <div
        className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "" : "hidden"}`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-2 md:m-2 items-center relative gap-10 text-xl w-full">
          <li className={items}>
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li className={items}>
              <Link to="projects" smooth duration={500}>
                Projects
              </Link>
          </li>
          <li className={items}>
            <Link to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
          <li className="duration-300 transition ease-in-out delay-150 p-2 border-solid border-2 border-white rounded-lg hover:border-blue-300 hover:text-blue-300">
            <a href={Resume} target="_blank" download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
