import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
    if (!posterpath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="poster" src={POSTER_URL+posterpath}/>
    </div>
  )
}

export default MovieCard
