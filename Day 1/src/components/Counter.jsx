import React, { useState } from 'react'


const Counter = () => {

    const [count,setCount]= useState(0)
    const [revCounter,setRevCounter] = useState(10)

  return (
    <div>
        <h1>Counter</h1>
        <h1> Counter : {count} </h1>
        <h2>Rev Count : {revCounter}</h2>
        <button onClick={()=>setCount(count +1)}> Update counter</button>
         <button onClick={()=>setRevCounter(revCounter - 1)}> Rev Update counter</button>
        
    </div>
  )
}

export default Counter