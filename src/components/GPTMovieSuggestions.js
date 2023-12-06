import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
  const {movieNames,moviesResults} = useSelector(store=>store.gpt)
  if(!movieNames) return null
  return (
    <div className='p-4 mt-10 bg-black bg-opacity-70'>
      {movieNames.map((movie,index)=><MovieList title={movie} movies={moviesResults[index]}/>)}
      </div>
  )
}

export default GPTMovieSuggestions