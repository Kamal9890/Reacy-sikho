import React from 'react'
import { Link } from 'react-router'

function UserDynamic() {


    const userData = [
        { id: 1, name: "Kamal" },
        { id: 2, name: "Pandey" },
        { id: 3, name: "Sachin" },
        { id: 4, name: "Virat" },
        { id: 5, name: "Rohit" },
        { id: 6, name: "Idli" }

    ]

    return (
        <div style={{ marginLeft: 20 }}>
            <h1>Dynamic user </h1>
            {
                userData.map((item) => (
                    <div>
                        <h4><Link to={"/users/" + item.id}>{item.name}</Link></h4>
                    </div>

                ))}

             <h1>User list with name url</h1>
            {
                userData.map((item) => (
                    <div>
                        <h4><Link to={"/users/" + item.id+"/"+item.name}>{item.name}</Link></h4>
                    </div>

                ))}    

        </div>
    )
}

export default UserDynamic