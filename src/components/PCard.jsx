import React from "react";
import Img1 from "../assets/download.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const PCard = () => {
  return (
    <div className="flex justify-center items-start content-center">
      <div className="flex flex-col md:flex-row align-center p-5 rounded-lg w-[60%] bg-blue-300 m-10 shadow-lg hover:shadow-2xl shadow-blue-500/50">
        {/*Image  */}
        <div className="pr-2 m-4 border-solid md:border-r-2 md:w-1/2 flex items-center border-sky-500 pt-0">
          <img className="bg-cover h-[110%] w-[250%]" src={Img1} />
        </div>

        <div className=" flex flex-col justify-around text-white bg-gray-950 p-5 rounded-lg hover:ring ring-blue-500 ring-offset-2"> 
          <h2 className="text-2xl font-bold">
            Video Call Application using Zego Cloud SDK
          </h2>
          {/* <p>Description:</p> */}
          <h3>Technologies used: React, SocketIO</h3>
          <ul className="flex md:justify-around m-2 rounded-lg space-x-2">
            <li className="bg-green-500 px-3 rounded-lg hover:bg-green-700">
              <a
                href="https://github.com/akhilesh-m01/VideoCallApp"
                target="_blank"
                className="flex items-center justify-around"
              >
                <p>Github</p>
                <IoIosLink className="inline w-3 h-5 m-1" />
              </a>
            </li>
            <li className="bg-blue-500 px-3 rounded-lg hover:bg-blue-700">
              <a
                href="https://akhilesh-videocallapp.vercel.app/"
                target="_blank"
                className="flex"
              >
                Live
                <FaExternalLinkAlt className="inline w-3 h-5 m-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PCard;
