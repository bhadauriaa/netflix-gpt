import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInform,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInform)
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg' 
                alt='background'
            />
        </div>

        <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInform ? "Sign In": "Sign Up"}</h1>
            {!isSignInform && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
            <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-800 w-full' >{isSignInform ? "Sign In": "Sign Up"}</button>
            <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInform? "New to Netflix? Sign Up Now": "Already registered? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login