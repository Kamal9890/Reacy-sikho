import React, { useEffect, useState } from 'react'

const Hooks = () => {


    const [counter,setCounter] = useState(0)
    const [data , setData] = useState(0)



    //  useEffect(()=>{
    //      callonce()
    // }) // all things running 

    // useEffect(()=>{
    //      callonce()
    // },[]) // once time calling

     useEffect(()=>{
         callonce()
    },[counter]) // particular part is running 

    function callonce(params) {
        console.log("called ");
        
    }
   

  return (
    <div>
        <h1>Use Effects</h1>
        <button onClick={()=> setCounter(counter+1)}>Counter {counter} </button>
        <button onClick={()=> setData(counter+1)}>Data {data} </button>
    </div>
  )
}

export default Hooks