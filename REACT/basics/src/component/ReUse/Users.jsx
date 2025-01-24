import React from 'react'
import UserData from './UserData'
const Users = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((item,i) =>
              <tr key={i}>
                <UserData user={item} key={i}/>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default Users
