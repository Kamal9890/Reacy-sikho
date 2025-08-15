import React, { useState } from 'react'

const Toggle = () => {

    const [display ,setDisplay] = useState(true)

  return (
    <div>
        <h1>Toggle</h1>
         <button onClick={ ()=> setDisplay(!display)}>Hide and show</button>


        {
            display ? <h1>Kamal </h1> : null
        }


       


    </div>



  )
}

export default Toggle