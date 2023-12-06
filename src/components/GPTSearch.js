import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
       <img  className="fixed -z-10" src={BG_URL}
     alt ="logo"/>
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch
