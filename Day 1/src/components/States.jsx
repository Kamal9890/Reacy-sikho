import React, { useState } from 'react'
import Counter from './Counter'

const States = () => {

    const [fruit,setFruit] = useState("Apple")


    const fruitChange= ()=>{
        setFruit("banana")
    }

    


  return (
    <div>
       <h1>Change fruits name </h1>

       <h1>{fruit}</h1>
       <button onClick={fruitChange}> Click me </button>

       <Counter/>

    
    </div>
  )
}

export default States