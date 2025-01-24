import React, { useEffect, useState } from 'react'

const GetMethod = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data.users)
            })
    }, [])
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.age}</td>
                                <td>
                                    <table border={1}>
                                        <tbody>
                                            <tr>
                                                <td>City: {item.address.city}</td>
                                                <td>State: {item.address.state}</td>
                                                <td>Country: {item.address.country}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetMethod
