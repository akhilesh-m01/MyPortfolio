import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap flex-row items-center justify-between m-0 bg-gradient-to-r from-gray-700 to-gray-800 p-4 text-white ">
      <div className="text-2xl font-bold text-blue-300"> &lt; Akhilesh/ &gt;</div>
      <ul className="flex flex-row flex-wrap space-x-2 mx-2 items-center relative gap-10 text-xl">
        <li className="duration-300 transition ease-in-out hover:text-blue-300">Projects</li>
        <li className="duration-300 transition ease-in-out hover:text-blue-300">About</li>
        <li className="duration-300 transition ease-in-out hover:text-blue-300">Experience</li>
        <li className="duration-300 transition ease-in-out delay-150 p-2 border-solid border-2 border-white rounded-lg hover:border-blue-300 hover:text-blue-300">
          Resume
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
