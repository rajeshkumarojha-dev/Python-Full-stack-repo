import React, { useState } from 'react'

const Forms = () => {

    const formSubmit = (e)=>{
        e.preventDefault()
        console.log(name)
        console.log(movie)
    }
    const [name,setName]=useState()
    const [movie,setMovie]=useState()
    return (
        <div>
            <form action="" onSubmit={formSubmit}>
                <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
                <select onChange={(e)=>setMovie(e.target.value)}>
                    <option value="marvel">Marvel</option>
                    <option value="anime">Anime</option>
                    <option value="dc">DC</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Forms
