import React, { useEffect } from 'react'

const PropsHooks = ({count,data}) => {


    useEffect(()=>{
    handleCounter()
    },[count])


    useEffect(()=>{
           handleData()
    },[data])

   const handleCounter= ()=>{
    console.log("Handle counter");
    
   }

   

   const handleData =()=>{
    console.log("data ");
    
   }



   
  return (
    <div>
        <h1>counter value {count} </h1>
         <h1>data {data} </h1>
        
    </div>
  )
}

export default PropsHooks