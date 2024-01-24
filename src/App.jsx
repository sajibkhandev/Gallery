import React,{useEffect, useState} from 'react'
import { getDatabase, push, ref, set } from "firebase/database";

const App = () => {
  const db = getDatabase();
  let [input,setInput]=useState("")
  let [all,setAll]=useState([])
  let handleClick=()=>{
    set(push(ref(db, 'users/' )), {
      name:input
    }).then(()=>{
      setInput('')
      
    });
    
  }
  
  return (
    <div className=''>
      <input value={input} type="text" onChange={(e)=>setInput(e.target.value)}  className=' border-solid border'/>
      <button onClick={handleClick} className='bg-red-200 py-2 px-10 rounded'>Add</button>
    </div>
  )
}

export default App