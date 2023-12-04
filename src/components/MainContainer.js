import React from 'react'
import VideoBackGround from './VideoBackGround'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies= useSelector((store)=>store?.movies?.nowPlayingMovies)
    if(!movies)return true;
    const mainMovie= movies?.[0]
   
    const {overview,original_title,id} =mainMovie|| {}
   
  return (
    <div>
     
      <Videotitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer
