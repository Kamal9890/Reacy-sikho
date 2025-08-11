import React from 'react'
import dp from "../assets/dp.png"

const ToDo = () => {

    function clickME(params) {
        alert("function called")
    }

  return (
    <div>
        <h1 >Kamal Pandey todo</h1>
        <img src={dp} alt=""  className='width-20px'/>

        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Imporove the spectrum</li>
        </ul>

        <button onClick={clickME}>Click me</button>
        
        
     </div>
  )
}

export default ToDo