import React, { useState } from 'react'

const Controll = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  

  function clear() {

    setEmail("")
    setName("")
    setPassword("")
    
  }

  return (
    <div>
        
        <h1> Controlled Components </h1>

        <form action="" method='get'>

            <input type="text" value={name}  placeholder='Enter name ' onChange={(e)=>setName(e.target.value)} /> 
            <br /><br />
            
            <input type="text" value={email} placeholder='Enter email ' onChange={(e)=>setEmail(e.target.value)} /> 
            <br /><br />

            
            <input type="password" value={password}  placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} /> 
            <br /><br />

            <button>Submit</button>

            <button onClick={clear}>Clear</button>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>

        </form>



    </div>
  )
}

export default Controll