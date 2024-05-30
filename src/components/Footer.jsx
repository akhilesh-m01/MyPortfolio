import React from "react";

const footEle = "flex flex-col justify-center items-center m-[10px]";

const Footer = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-around items-center p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white"
      name="contact"
    >
      <div className={`${footEle}`}>
        <h2 className="text-xl text-blue-500">Get in Touch</h2>
        <ul>
          <li>
            <a href="https://x.com/OnesAndZeros_01" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akhilesh-m01/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className={`$footEle`}>
        <h2 className="text-xl text-blue-500">Explore</h2>
        <ul className="">
          <li>
            <a href="https://github.com/akhilesh-m01" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://medium.com/@onesandzeros01" target="_blank">
              Medium
            </a>
          </li>
        </ul>
      </div>
      <div className={`$footEle`}>
        <h2 className="text-xl text-blue-500">Send Mail</h2>
        <ul>
          <li>
            <a href="mailto:im.akhilesh01@gmail.com">im.akhilesh01@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
