import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"

const useTrailerVideo = (movieId)=>{
    const dispatch =useDispatch()
    const getVideos =async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        
        const trailerVideo = json?.results?.find(video =>video?.type ==="Trailer")
        const filteredVideo = trailerVideo? trailerVideo: json?.results[0]
        dispatch(addTrailerVideo(filteredVideo))
      }
      useEffect(()=>{
        if(movieId){
            getVideos()
        }
      
    },[movieId])
}

export default useTrailerVideo;