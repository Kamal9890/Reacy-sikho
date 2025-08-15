import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './Api/UserList'
import { NavLink, Route, Routes } from 'react-router'
import UserAdd from './Api/userAdd'

function App() {
  

  return (

   

    <>

    <div>
     <ul className='nav-list'>
      <li>
        <NavLink to="/">List</NavLink>
       
      </li>
      <li> <NavLink to="/add">Add user </NavLink></li>
     </ul>
     

     <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='/add' element={<UserAdd/>} />

     </Routes>

    </div>
     
    </>
  )
}

export default App
