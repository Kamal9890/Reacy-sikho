import React from 'react'

const FunctionCall = () => {


    const fruit = ()=>{
      alert("Apple ")
    }

    const fruit1 = (name)=>{
      alert(name)
    }

  return (
    <div>FunctionCall
        <button onClick={fruit}>Click me</button>
        <button onClick={()=> fruit1("banana")}>Click me</button>
    </div>
  )
}

export default FunctionCall