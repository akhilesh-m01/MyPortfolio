import React from 'react';
import Img1 from '../assets/download.png'

const PCard = () =>{
  return(
    <div className='flex justify-center items-center border-2 border-black'>
      <div className='flex p-10 border-1 w-[60%] bg-blue-300 m-10'>
        <div className='w-1/3'>
          <img className='bg-cover w-80' src={Img1}/>
        </div>
        <div className='w-2/3'>
          <h2>Project Name</h2>
          <p>Description</p>
          <h3>Technologies used: </h3>
          <ul className='flex justify-between'>
            <li>Github</li>
            <li>Live</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PCard;