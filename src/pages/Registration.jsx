import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
   rounded
  return (
    <div className='bg-blue-200 h-screen py-24'>
      <div className='w-[500px]  bg-white rounded mx-auto'>
        <div className='flex flex-col items-center gap-y-8 py-10'>
          <div >
          <label className='text-xl' htmlFor="name">Name: </label>
          <input onChange={(e)=>setName(e.target.value)} className='bg-blue-200 py-1 px-3 rounded' id="name" value={name} type="text" placeholder='Name:'/>
        </div>
        <div>
          <label className='text-xl' htmlFor="email">Email: </label>
          <input onChange={(e)=>setEmail(e.target.value)} className='bg-blue-200 py-1 px-3 rounded' id="email" value={email} type="text" placeholder='Email:'/>
        </div>
        <div>
          <label className='text-xl' htmlFor="password">Name: </label>
          <input onChange={(e)=>setPassword(e.target.value)} className='bg-blue-200 py-1 px-3 rounded' id="password" value={password} type="text" placeholder='Password:'/>
        </div>
        <button onClick={handleSubmit} className='py-2 px-8 bg-blue-200 rounded'>Submit</button>
        <p>Already have a Account <Link to='/login'><span className='text-red-700'>Login</span></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Registration