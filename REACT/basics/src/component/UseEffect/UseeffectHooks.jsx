import React,{useEffect, useState} from 'react'

const UseeffectHooks = () => {
    const[data,setData]=useState(0)
    const [count,setCount]=useState(100)
    // useEffect(()=>{
    //     alert('data'+data)
    // },[data])
  return (

    <div>
      <h1>{data}</h1>
      <button onClick={()=>setData(data+1)}>Update Data</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update count</button>
    </div>
  )
}

export default UseeffectHooks
