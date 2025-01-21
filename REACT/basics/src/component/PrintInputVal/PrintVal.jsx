import React,{useState} from 'react'

const PrintVal = () => {
    const[data,setData]=useState()
    const[print,setPrint]=useState(false)
  return (
    <div>
      <input type="text" onChange={(e)=>setData(e.target.value)}/>
      <button onClick={()=>setPrint(true)}>Print Data</button>
      {
      print?<h1>{data}</h1>:null
      }
    </div>
  )
}

export default PrintVal
