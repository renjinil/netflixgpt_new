import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import openai from '../utils/openAI'
import { API_OPTIONS } from '../utils/constants'
import { addGPTMovies } from '../utils/gptSlice'

const GPTSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  const dispatch = useDispatch()
  const searchTextRef= useRef(null)
  const getGPTSearchedMovies = async (movie)=>{
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data?.json()
    return json?.results
  }
  const handleGPTAPI =async()=>{
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchTextRef.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies=chatCompletion?.choices?.[0]?.message?.content?.split(",")
   
    const promiseDataArray=gptMovies?.map(movie =>getGPTSearchedMovies(movie))
    const tmdbSearchResult = await Promise.all(promiseDataArray) 
    dispatch(addGPTMovies({movieNames:gptMovies,moviesResults:tmdbSearchResult}))
  }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' placeholder={lang[langKey].GPT_PLACEHOLDER_TXT} className='p-4 m-4 col-span-9' ref={searchTextRef}/>
            <button className='bg-red-800 py-2 m-4 text-white rounded-lg px-4 col-span-3' onClick={handleGPTAPI}>{lang[langKey].SEARCH}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar