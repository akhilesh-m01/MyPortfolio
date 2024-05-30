import React from 'react';
import MyImage from '../assets/MyImage.jpeg';

const About = () =>{
  return(<div className='flex flex-col-reverse md:flex-row justify-around items-center bg-gradient-to-r from-gray-700 to-gray-800 h-[70vh]' name="about">
    <div className='flex items-center justify-center w-96'>
      <div className="p-4 m-2 rounded-lg text-white text-xl">
        <p className='text-3xl font-bold text-blue-300'>Hey, I'm Akhilesh,</p>
        a passionate software engineer with a strong background in web development. I have experience in building responsive websites and web applications using ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL.
      </div>
    </div>
    <div className="w-2/5 flex items-center justify-center">
      <img className='rounded-full w-80 bg-cover' src={MyImage}/>
    </div>
    
  
  </div>)
};

export default About;