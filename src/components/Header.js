import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user= useSelector((store)=>store.user)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div  className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen justify-between flex'>
      <img className='w-44' alt="netflix logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
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