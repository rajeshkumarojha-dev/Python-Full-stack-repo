import React from 'react'

const Mapping = () => {
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            age: 28
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            age: 34
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            age: 25
        },
        {
            id: 4,
            name: "Bob Brown",
            email: "bob.brown@example.com",
            age: 40
        },
        {
            id: 5,
            name: "Charlie Davis",
            email: "charlie.davis@example.com",
            age: 30
        }
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.age}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Mapping
