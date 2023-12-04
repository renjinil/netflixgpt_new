import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const user= useSelector((store)=>store.user)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
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
