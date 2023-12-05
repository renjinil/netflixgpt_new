import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingmovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies =()=>{
    const dispatch = useDispatch()
    const getUpComingMovies = async ()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json();
 
      dispatch(addUpcomingmovies(json?.results))
    }
    useEffect(()=>{
      getUpComingMovies()
    },[])
}
export default useUpcomingMovies;