import React from 'react'

const NestedLooping = () => {

       const clgData = [
        {
            name:"Buit",
            city:"bhopal",
            student:[
                {
                    name:"kamal",
                    age:"24",
                    email:"kk@gmail.com"
                }
            ]
        },
        {
            name:"IIT",
            city:"delhi",
            student:[
                {
                    name:"kamal",
                    age:"24",
                    email:"kk@gmail.com"
                }
            ]
        },
        {
            name:"TIT",
            city:"Bhopal",
            student:[
                {
                    name:"kamal",
                    age:"24",
                    email:"kk@gmail.com"
                }
            ]
        },
       ]


  return (
    <div>
        <h1>College Data</h1>
        {
            clgData.map((clg,index)=>(
                <div key={index}>
                    <h1>Name : {clg.name}</h1>

                <ul>
                    <li>
                        <h3>City:{clg.city}</h3>
                    </li>
                    
                </ul>
                </div>
            ))
        }
    </div>
  )
}

export default NestedLooping