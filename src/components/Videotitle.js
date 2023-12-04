import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video '>
      <h1 className='text-6xl font-bold '>{title}</h1>
      <p className=' w-1/4 py-4'>{overview}</p>
      <div>
        <button className='text-black bg-white rounded-lg p-3 px-12 text-xl hover:bg-opacity-80'>▶ Play</button>
        <button className='text-white bg-gray-500 rounded-lg p-3 px-12 text-xl hover:bg-opacity-80 mx-2'>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle
