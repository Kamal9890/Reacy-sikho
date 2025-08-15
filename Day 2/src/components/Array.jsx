import React from 'react'

const Array = ({user}) => {


    const userData = [
        {
            name: "KAMAL",
            age: 22,
            email: "kk@gmail.com",
            id: 1
        },
        {
            name: "sam",
            age: 23,
            email: "sam@gmail.com",
            id: 2
        },
        {
            name: "bro",
            age: 24,
            email: "bro@gmail.com",
            id: 3
        }
    ]

    return (
        <div>
            <h1>Loop in jsx with map function </h1>

            <table border="1">
                <thead>
                    <tr>
                        
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>age</td>
                    
                    </tr>
                   
                </thead>

                <tbody>
                    {
                        userData.map((user)=>(
                            <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Array