import React from "react";
import PCard from "./PCard";

const Projects = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <div className="flex justify-around items-center p-4">
          <h2>Frontend</h2>
          <div>Javascript, CSS, React, NextJS, TailwindCSS, Typescript, Sass</div>
        </div>
        <div className="flex justify-around items-center p-4">
          <h2>Backend</h2>
          <div>NodeJS, ExpressJS, MongoDB, Postgres, Prisma, RestAPI</div>
        </div>
      </div>
      <div>
        <PCard/>
      </div>
    </div>
  );
};

export default Projects;
