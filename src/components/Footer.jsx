import React from 'react';

const Footer = () =>{
  return(
    <div className='flex justify-around items-center p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white'>
      <div>
        <h2 className='text-2xl'>Get in Touch</h2>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div>
        <h2>Explore</h2>
        <ul>
          <li>Medium</li>
          <li>Github</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Email:im.akhilesh01@gmail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;