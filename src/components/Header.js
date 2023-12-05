import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGPTSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const user= useSelector((store)=>store.user)
  const showGpt = useSelector(store=>store.gpt?.showGpt)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  const handleGPTSearch =()=>{
    dispatch(toggleGPTSearch())
  }
  const handleChangelanguage =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return ()=>unsubscribe()
  },[])
  return (
    <div  className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen justify-between flex'>
      <img className='w-44' alt="netflix logo" src={LOGO}/>
    {user&&<div className='flex p-2 items-center'>
      {showGpt&&<select className='p-2 bg-gray-900 text-white m-2' onChange={handleChangelanguage}>
        {SUPPORTED_LANG?.map(option=> <option key={option?.identifier} value={option?.identifier}>{option?.type}</option>)}
      </select>}
      <button className='px-4 py-2 text-white bg-purple-600 mx-4 my-2 rounded-lg font-semibold' onClick={handleGPTSearch}>{showGpt?"Home":"GPT Search"}</button>
      <img
            className="hidden md:block w-12 h-12 rounded-md"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
      </div>}
    </div>
  )
}

export default Header
