import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <li className={items}>Projects</li>
          <li className={items}>About</li>
          <li className={items}>Experience</li>
          <li className="duration-300 transition ease-in-out delay-150 p-2 border-solid border-2 border-white rounded-lg hover:border-blue-300 hover:text-blue-300">
            Resume
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
