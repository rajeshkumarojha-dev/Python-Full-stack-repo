import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    let inputRef=useRef()

    const[data,setData]=useState('')
    const[print,setPrint]=useState(false)
    const HandleInput=()=>{
        setPrint(true)
        inputRef.current.style.color='red'
    }
  return (
    <div>
      <input type="text" placeholder='Enter text' ref={inputRef} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={HandleInput}>Update</button>
        {
            print?<h1>{data}</h1>:null
        }
    </div>
  )
}

export default UseRefHook
