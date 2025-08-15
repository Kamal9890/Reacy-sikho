import React, { useContext } from 'react'
import { SubjectContextt } from './ContextApi'

const Subject = () => {

    const sub = useContext(SubjectContextt)

  return (
    <div  style={{backgroundColor:"orange", padding:10}}>
        <h1>Subject is :{sub}</h1>
    </div>
  )
}

export default Subject