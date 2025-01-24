import React, { useState } from 'react'

const SearchBar = () => {
    const[data,setData]=useState('')
    const [result,setResult]=useState([])

    const user=[
        {name:'Rajesh', email:"rajeshKumarojha@gmail.com"},
        {name:'Pratik', email:"pratikkumar@gmail.com"}
    ]

    const changeHandler=(e)=>{
        let value=e.target.value
        setData(value)
        console.log(value)
        const filteredData= user.filter((item)=>
            item.name.toLowerCase().includes(value.toLowerCase())
        )
        setResult(filteredData)
    }
    
  return (
    <div>
      <h1>This is Search Bar Page</h1>
      <input type="text" placeholder='Enter Name' value={data} onChange={changeHandler} />
      {
        result.map((item)=>
            <>
            <h6>{item.name}</h6><span>{item.email}</span>
            </>
            
        )
      }
    </div>
  )
}

export default SearchBar
