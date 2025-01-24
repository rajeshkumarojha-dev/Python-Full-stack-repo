import React from 'react'
import {useParams} from 'react-router-dom'
const Profile = () => {
    const {id}=useParams()
    const {name}=useParams()
  return (
    <div>
      <h1>Profile Component id:{id}</h1>
      <h1>Profile Component name:{name}</h1>
    </div>
  )
}

export default Profile
