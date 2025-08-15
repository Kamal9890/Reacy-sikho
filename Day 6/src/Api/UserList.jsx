import { useEffect, useState } from 'react'


import '../App.css'
const UserList = () => {

      const [userData, setUserData] = useState([])
    
      useEffect(()=>{
        getUserData()
      },[])
    
       async function getUserData() {
          const url ="https://dummyjson.com/users"
          let response = await fetch(url)
          response = await response.json()
          
          setUserData(response.users)
          
        }
    
        console.log(userData);
        

  return (
    <div>
         <h1>Fetch data from api</h1>

    <ul className='user-list user-list-head'>
      <li>First Name </li>
      <li>Last Name </li>
      <li>Age</li>
    </ul>


    {
      userData && userData.map((user)=>(
        
        <ul className='user-list'>
          <li> {user.firstName} </li>
          <li> {user.lastName} </li>
          <li> {user.age} </li>
        </ul>
      ))

    }
    </div>
  )
}

export default UserList