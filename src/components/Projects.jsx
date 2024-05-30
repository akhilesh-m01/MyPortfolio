import React from "react";
import PCard from "./PCard";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Projects = () => {
  return (
    <div name="projects">
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <div className="flex justify-around items-center p-4">
          <h2>Frontend</h2>
          <Frontend />
        </div>
        <div className="flex justify-around items-center p-4">
          <h2>Backend</h2>
          <Backend />
        </div>
      </div>
      <div>
        <PCard />
      </div>
    </div>
  );
};

export default Projects;
