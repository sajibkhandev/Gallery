import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let handleSubmit=()=>{
    console.log(name);
    console.log(email);
    console.log(password);
    setName("")
    setEmail("")
    setPassword("")
  }
  return (
    <div className='bg-blue-200 h-screen py-24'>
      <div className='w-[500px]  bg-white rounded mx-auto'>
        <div className='flex flex-col items-center gap-y-8 py-10'>
          
        <div>
          <label className='text-xl' htmlFor="email">Email: </label>
          <input onChange={(e)=>setEmail(e.target.value)} className='bg-blue-200 py-1 px-3 rounded' id="email" value={email} type="text" placeholder='Email:'/>
        </div>
        <div>
          <label className='text-xl' htmlFor="password">Name: </label>
          <input onChange={(e)=>setPassword(e.target.value)} className='bg-blue-200 py-1 px-3 rounded' id="password" value={password} type="text" placeholder='Password:'/>
        </div>
        <button onClick={handleSubmit} className='py-2 px-8 bg-blue-200 rounded'>Log In</button>
        <p>Don't have Account <Link to='/'><span className='text-red-700'>Sign up</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login