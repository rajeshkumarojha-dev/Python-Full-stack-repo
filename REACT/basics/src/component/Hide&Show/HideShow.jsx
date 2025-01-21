import React, { useState } from 'react'

const HideShow = () => {
  const [status,setstatus]=useState(false)
  return (
    <div>
      {
      
      status?<h1>Element</h1>:''
      }
      <button onClick={()=>setstatus(false)}>Hide</button>
      <button onClick={()=>(setstatus(true))}>Show</button>
    </div>
  )
}

export default HideShow
