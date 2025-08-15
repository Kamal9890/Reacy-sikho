import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import "./header.css"

function College() {
  return (
    <div style={{textAlign:'center'}} className='college'>
        <h1>College</h1>

       <h3> <Link to="/">Go to home page </Link></h3> 

        <NavLink className='Link' to="">Student</NavLink>
        <NavLink className='Link' to="department">Department</NavLink>
        <NavLink  className='Link' to="details">Details</NavLink>
        <Outlet/>
    </div>
  )
}

export default College