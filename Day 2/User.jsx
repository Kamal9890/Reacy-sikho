import React from 'react'
import Props from './src/Props'
import ArrayProps from './ArrayProps'


//  const username ="kkkk"
//   const age = 29;
//   const data =40


  // object ke dwara props bhejna hau 

  let userobj = {
    name:"kamal",
    age:20,
    email:"gmail.com"
  }

  
  let userobj2 = {
    name:"shyama",
    age:20,
    email:"gmail.com"
  }



const User = () => {
  return (
     <div>
      {/* <Props name = "kamal" age = {29} email ="kamal@gmail.com"/> */}
       {/* <Props name = {username} age = {age} data ={data} /> */}

       {/* <Props user = {userobj}/>
       <Props user ={userobj2}/> */}

       {/* <ArrayProps/> */}


    </div>
  )
}

export default User