import React from "react";

const footEle =
  "flex flex-col justify-center items-center m-[10px]";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
      <div className={`${footEle}`}>
        <h2 className="text-2xl">Get in Touch</h2>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className={`$footEle`}>
        <h2>Explore</h2>
        <ul>
          <li>Medium</li>
          <li>Github</li>
        </ul>
      </div>
      <div className={`$footEle`}>
        <ul>
          <li>Email:im.akhilesh01@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
