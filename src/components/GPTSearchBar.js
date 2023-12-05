import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const GPTSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' placeholder={lang[langKey].GPT_PLACEHOLDER_TXT} className='p-4 m-4 col-span-9'/>
            <button className='bg-red-800 py-2 m-4 text-white rounded-lg px-4 col-span-3'>{lang[langKey].SEARCH}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar