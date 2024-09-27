import React from "react";
import project1 from "../assets/projectImages/project1.png";
import project2 from "../assets/projectImages/project2.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";

const PCard = () => {
  const projects = [
    {
      title: "Blog Shere",
      tech: "React.js, Node.js, Express.js, MongoDB, TailwindCSS, Redux",
      git: "https://github.com/akhilesh-m01/BlogShere-Frontend",
      live: "https://blog-shere-frontend.vercel.app/",
      pimg: project2,
    },
    {
      title: "Video Call Application using Zego Cloud SDK",
      tech: "React.js, SocketIO",
      git: "https://github.com/akhilesh-m01/VideoCallApp",
      live: "https://akhilesh-videocallapp.vercel.app/",
      pimg: project1,
    },
  ];

  return (
    <div>
      {projects.map((p, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50, // Slide direction based on index
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide to original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
        >
          <div className="flex justify-center items-start content-center">
            <div className="flex flex-col md:flex-row align-center p-5 rounded-lg w-[60%] bg-blue-300 m-10 shadow-lg hover:shadow-2xl shadow-blue-500/50">
              {/* Image */}
              <div className="pr-2 m-4 border-solid md:border-r-2 md:w-1/2 flex items-center border-sky-500 pt-0">
                <img className="bg-cover h-[110%] w-[250%]" src={p.pimg} alt="Project" />
              </div>

              <div className="flex flex-col justify-around text-white bg-gray-950 p-5 rounded-lg hover:ring ring-blue-500 ring-offset-2">
                <h2 className="text-2xl font-bold">{p.title}</h2>
                <h3 className="overflow-hidden">Technologies used: {p.tech}</h3>
                <ul className="flex md:justify-around m-2 rounded-lg space-x-2">
                  <li className="bg-green-500 px-3 rounded-lg hover:bg-green-700">
                    <a href={p.git} target="_blank" rel="noopener noreferrer" className="flex items-center justify-around">
                      <p>Github</p>
                      <IoIosLink className="inline w-3 h-5 m-1" />
                    </a>
                  </li>
                  <li className="bg-blue-500 px-3 rounded-lg hover:bg-blue-700">
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex">
                      Live
                      <FaExternalLinkAlt className="inline w-3 h-5 m-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PCard;
