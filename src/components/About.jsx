import React from 'react';
import MyImage from '../assets/MyImage.jpeg';
import { motion } from "framer-motion"

const About = () =>{

  const text = "a passionate software engineer with a strong background in web development. I have experience in building responsive websites and web applications using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL.".split(" ");

  return(
  <motion.div
  layout
  className='flex flex-col-reverse md:flex-row justify-around items-center bg-gradient-to-r from-gray-700 to-gray-800 h-[70vh]' name="about">
    <div className='flex items-center justify-center w-96'>
      <div className="p-4 m-2 rounded-lg text-white text-xl">
        <p className='text-3xl font-bold text-blue-300'>Hey, I'm Akhilesh,</p>
        {/* a passionate software engineer with a strong background in web development. I have experience in building responsive websites and web applications using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL. */}
        {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      </div>
    </div>
    <div className="w-2/5 flex items-center justify-center">
      <img className='rounded-full w-80 bg-cover' src={MyImage}/>
    </div>
    
  
  </motion.div>)
};

export default About;