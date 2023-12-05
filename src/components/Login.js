import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateForm } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG_URL, PHOTO_URL } from '../utils/constants'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const[errorMessage,setErrorMessage]= useState(null)
 
  const dispatch =useDispatch()
  const email= useRef(null)
  const password= useRef(null)
  const name = useRef(null)

  const handleSubmitForm=()=>{
   const errMsg= checkValidateForm(email?.current?.value, password?.current?.value,name?.current?.value,isSignInForm)
   setErrorMessage(errMsg)
   if(errorMessage) return;
   //signup
   if(!isSignInForm){
    createUserWithEmailAndPassword(auth,email?.current?.value, password?.current?.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name?.current?.value, photoURL: PHOTO_URL
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       
      }).catch((error) => {
        setErrorMessage(error.message)
      });
      console.log(user)
     
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
    });
   }
   else{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log({user})
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });

   }
  }
  const handleToggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div >
        <Header/>
        <div>
    <img  className="absolute" src={BG_URL}
     alt ="logo"/>
     </div>
     <form onSubmit={(e)=>e.preventDefault()} className=' bg-black bg-opacity-80 absolute mx-auto my-36 p-12  w-3/12 right-0 left-0'>
      <h1 className='font-bold text-3xl text-white py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm&&<input ref={name} type="text" placeholder='Full Name' className='p-4 my-2 w-full rounded-md bg-gray-800 text-white'/>}
      <input ref={email} type="text" placeholder='Email or phone number' className='p-4 my-2 w-full rounded-md bg-gray-800 text-white'/>
      <input ref={password} type='password' placeholder='password' className='p-4 my-2 w-full rounded-md bg-gray-800 text-white'/>
      {errorMessage&&<p className='text-red-700 font-bold'>{errorMessage}</p>}
      <button className='bg-red-800 w-full p-4 my-6  rounded-md' onClick={handleSubmitForm}>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='text-white cursor-pointer' onClick={handleToggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now.":"Already Registered, Please Sign In now!."}</p>
     </form>
   
    </div>
  )
}

export default Login
