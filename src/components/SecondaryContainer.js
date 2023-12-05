import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies= useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-30'>
      <div><MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/></div>
      <div><MovieList title="Trending" movies={movies?.topRatedMovies}/></div>
      <div><MovieList title="Popular" movies={movies?.popularMovies}/></div>
      <div><MovieList title="Upcoming" movies={movies?.upComingMovies}/></div>
      <div><MovieList title="Horror" movies={movies?.nowPlayingMovies}/></div>
    </div>
    </div>
  )
}

export default SecondaryContainer
