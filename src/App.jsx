import React,{useEffect, useState} from 'react'
import { getDatabase, push, ref, set,onValue, remove  } from "firebase/database";

const App = () => {
  const db = getDatabase();
  let [input,setInput]=useState("")
  let [condition,setCondition]=useState(true)
  let [index,setIndex]=useState("")
  let [all,setAll]=useState([])
  let handleClick=()=>{
    set(push(ref(db, 'users/' )), {
      name:input
    }).then(()=>{
      setInput('')
      
    });
    
  }
  useEffect(()=>{
    const starCountRef = ref(db, 'users/');
onValue(starCountRef, (snapshot) => {
  let arr=[]
  snapshot.forEach(item=>{
     arr.push({...item.val(),id:item.key})
  })
  setAll(arr)
});

  },[])

  let handleDelete=(item)=>{
    remove(ref(db, 'users/'+item.id ))
  }
  let handleEdit=(item)=>{
    setInput(item.name)
    setCondition(false)
    setIndex(item.id);

  }
  let handleUpdate=()=>{
    setCondition(true)
    set(ref(db, 'users/'+index ), {
      name:input
    }).then(()=>{
      setInput('')
      
    });
  }
  
  
  
  return (
    <div className=''>
      <input value={input} type="text" onChange={(e)=>setInput(e.target.value)}  className=' border-solid border'/>
      {condition?
        <button onClick={handleClick} className='bg-red-200 py-2 px-10 rounded'>Add</button>
      :
      <button onClick={handleUpdate} className='bg-red-200 py-2 px-10 rounded'>UPdate</button>
      }
     {
      all.map(item=>(
        <>
        <h2>{item.name}</h2>
        <button onClick={()=>handleDelete(item)} className='bg-red-500 py-1 px-6 rounded'>Delete</button>
        <button onClick={()=>handleEdit(item)}  className='bg-blue-500 py-1 px-6 rounded'>Edit</button>
        </>
      ))
     }
    </div>
  )
}

export default App