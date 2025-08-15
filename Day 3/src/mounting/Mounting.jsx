import React, { useEffect, useState } from 'react'

function Mounting() {

    const [display,setDisplay]= useState(true)

    useEffect(()=>{
        console.log("Mounting phase ");
        
    })


    useEffect(()=>{
        console.log("Update phase only");
        
    },[state,props])


    // useEffect(()=>{
    //    return()=>{
    //     console.log("Unmounting ");
//       }
    //    
        
    // }.[])

  return (
    <div></div>
  )
}

export default Mounting