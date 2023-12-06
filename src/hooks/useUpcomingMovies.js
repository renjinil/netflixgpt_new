import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingmovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies =()=>{
    const dispatch = useDispatch()
    const upComingMovies = useSelector(store=>store?.movies?.upComingMovies)
    const getUpComingMovies = async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json();
 
      dispatch(addUpcomingmovies(json?.results))
    }
    useEffect(()=>{
      !upComingMovies&&getUpComingMovies()
    },[])
}
export default useUpcomingMovies;