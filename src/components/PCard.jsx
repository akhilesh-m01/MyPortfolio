import React from 'react';

const PCard = () =>{
  return(
    <div className='flex justify-around items-center'>
      <div>
        <img className='' src="#"/>
      </div>
      <div>
        <h2>Project Name</h2>
        <p>Description</p>
        <h3>Technologies used: </h3>
        <ul className='flex justify-between'>
          <li>Github</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  )
}

export default PCard;