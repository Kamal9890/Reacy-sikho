import React from 'react'
import Props from './src/Props'

const ArrayProps = () => {


    let clgName =["buit","tit","rgpv","lnct"]

  return (
    <div>
        <h1>Array Props </h1>

        <Props name  ={clgName[3]}/>
    </div>
  )
}

export default ArrayProps