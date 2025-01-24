import React from 'react'
import DynamicRoute from './DynamicRoute';
const Data = () => {
    const users = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          age: 28,
          isActive: true
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          age: 34,
          isActive: false
        },
        {
          id: 3,
          name: "Mike Johnson",
          email: "mike.johnson@example.com",
          age: 25,
          isActive: true
        },
        {
          id: 4,
          name: "Emily Brown",
          email: "emily.brown@example.com",
          age: 30,
          isActive: true
        },
        {
          id: 5,
          name: "Chris Wilson",
          email: "chris.wilson@example.com",
          age: 22,
          isActive: false
        }
      ];
      
  return (
    <div>
      <DynamicRoute data={users}/>
    </div>
  )
}

export default Data
