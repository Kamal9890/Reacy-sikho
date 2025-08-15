import React, { useState } from 'react'
import Props from './Props'

const Student = () => {

    let [student ,setStudent] = useState("kamal")

   let name  = "sam"

  return (
    <div>
        <h3>Student name </h3>
      {student &&  <Props name = {student} />}

      <button onClick={()=> setStudent("bhaskar")}>Updtae studnet </button>
    </div>
  )
}

export default Student