import React from 'react'

const UserData = (props) => {
  return (
    <>
        <td >{props.i+1}</td>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.age}</td>
    </>
  )
}

export default UserData
