import React, { useState } from 'react'

const Input = () => {

    const [val,setVal] = useState("Kamal")

    

  return (
    <div>
        <h1>Get Input field </h1>
        <input type="text" value={val} placeholder='Enter your name ' onChange={(e)=>setVal(e.target.value)} /><br></br>
        <input type="text" value={val} placeholder='Enter your age ' onChange={(e)=>setVal(e.target.value)} /><br></br>
        <input type="text" value={val} placeholder='Enter your email ' onChange={(e)=>setVal(e.target.value)} /> <br></br>
        
        
        
        <button onClick={()=> setVal("")}>Clear Value </button>
    </div>
  )
}

export default Input