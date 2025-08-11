import React from 'react'

const Home = () => {

    const username ="kamal"
  return (
         <div>
             <h1>Kya bhidu {username} </h1>

    <button onClick={()=> alert("commnon")}>Click</button>
         </div>
  )
}

export default Home


export const Profile =()=>{
  return (
    <div>Helllow</div>
  )
}