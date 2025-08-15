import React, { useState } from 'react'

const RadioButton = () => {
    const [gender,setGender] = useState("female")


    const [city,setCity] = useState("rewa")




  return (
    <div>
        <h1>Radio sikho </h1>
        <h4>Select Gneder </h4>
        <input type="radio" name='gender' id='male' value={"male"} checked= {gender=="male"} onChange={(e)=> setGender(e.target.value)}/> 
        <label htmlFor="male">Male</label>


        <input type="radio" name='gender' id='female' value={"female"} checked= {gender=="female"} onChange={(e)=> setGender(e.target.value)} /> 
         <label htmlFor="female">Female</label>
         <h2>Seleted gender : {gender} </h2>



         <br /><br />

         <h2>Select city</h2>

         <select defaultValue={"rewa"} onChange={(e)=> setCity(e.target.value )}>
            <option value="noida">Noida</option>
             <option value="Bhopal">Bhopal</option>
              <option value="rewa">Rewa</option>
         </select>

         <h2>City name : {city}</h2>
    </div>
  )
}

export default RadioButton