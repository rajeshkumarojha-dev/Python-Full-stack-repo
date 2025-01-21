import React,{useState} from 'react'

const StateName = () => {
    const[data,getData]=useState('Anil')
    const[count,setCount]=useState(0)
  return (
    <div>
      <div className="name">
      <h1>{data}</h1>
      <button onClick={()=>getData("Rajesh")}>Update Name</button>
      </div>
      <div className="count">
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
      </div>
    </div>
  )
}

export default StateName
