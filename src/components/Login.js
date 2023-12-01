import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateForm } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const[errorMessage,setErrorMessage]= useState(null)
  const navigate= useNavigate()
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
        displayName: name?.current?.value, photoURL: "https://lh3.googleusercontent.com/-u70x7by-BiY/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgIxNE90ssYW77aQ6CUTwPHiMG5Ing/photo.jpg?sz=46"
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
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
    navigate("/browse")
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
    <img  className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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