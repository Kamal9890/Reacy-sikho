import React, { useState } from 'react'

function AddUser({setUser}) {

  
  return (
    <div>
         <h1>Add user Lifting up State </h1>
         <input type="text" placeholder='enter user name ' onChange={(e) => setUser(e.target.value)} />
    <hr />
    </div>
  )
}

export default AddUser