import React from 'react'
import Array from './Array'

function ReUseComponent() {


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
        <div> <h1>ReUseComponent </h1>
            {
                userData.map((user)=> (
                    <div>
                        
                    </div>
                ))
                
                }

        </div>
    )
}

export default ReUseComponent