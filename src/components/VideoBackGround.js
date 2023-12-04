
import {  useSelector } from 'react-redux'
import useTrailerVideo from '../hooks/useTrailerVideo'

const VideoBackGround = ({movieId}) => {
  const Trailer = useSelector(store=>store.movies?.trailerVideo)

    useTrailerVideo(movieId)
 
   

console.log({movieId})
  return (
    <div><iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${Trailer.key}?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
  )
}

export default VideoBackGround
