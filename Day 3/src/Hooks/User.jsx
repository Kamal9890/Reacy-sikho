import React from 'react'

function User({displayName,name}) {
   
  return (
    <div>
        <button onClick={()=>displayName(name)}>Display</button>
    </div>
  )
}

export default User