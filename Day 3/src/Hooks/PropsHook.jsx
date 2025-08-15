import React, { useState } from 'react'
import PropsHooks from './PropsHooks'

const PropsHook = () => {

    const [count,setCounter]  = useState(0)
    const [data,setData]= useState(0)
  return (
    <div>
        <PropsHooks count ={count} data={data}/>
        <button onClick={()=> setCounter(count+1)}>Counter</button>
        
        <button onClick={()=> setData(data+1)}>Data</button>
    </div>
  )
}

export default PropsHook