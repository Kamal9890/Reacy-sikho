import React, { useEffect, useState } from 'react'

const Clock = ({color}) => {

    const [time ,setTime] = useState(0)

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[])



  return (
    <div>
        <h1>Clock</h1>

        <h1 style={{color:color, backgroundColor:"#000",width:"200px" , padding:"10px", borderRadius:"30px"}}>{time}</h1>
    </div>
  )
}

export default Clock