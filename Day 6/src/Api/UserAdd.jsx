import React, { useState } from 'react'

function UserAdd() {

    const [name,setName]= useState('')
     const [age,setAge]= useState('')

      const [email,setEmail]= useState('')

      const createUser= async()=>{
        console.log(name,age,email);
        const url= "https://dummyjson.com/users"
        let response = await fetch(url,{
            method:"Post",
            body:JSON.stringify({name,email,age})
        })

        response= await response.json()
        if (response) {
            alert("new user added")
            
        }

      }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Add new user </h1>
        <input type="text" placeholder='Enter name'  onChange={(e)=> setName(e.target.value)}/>
        <br /><br />
        <input type="text" placeholder='Enter age'  onChange={(e)=> setAge(e.target.value)}/>
        <br /><br />
        <input type="text" placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)} />
        <br /><br />

        <button onClick={createUser}>Add User</button>
    </div>
  )
}

export default UserAdd