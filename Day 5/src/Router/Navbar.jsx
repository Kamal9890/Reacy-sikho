import React from 'react'
import { Link, Outlet } from 'react-router'
import Home from './Home'
import './header.css'

const Navbar = () => {
  return (
   <div>
     <div className='header'>
        <div >
          <Link className='Link' to="/"><h2>Logo</h2></Link>
          
          </div>
        <div>
           <ul>
            <li>
              <Link className='Link' to="/">Home</Link>
            </li>
             <li>
              <Link className='Link' to="/about">About</Link>
            </li>
             <li>
              <Link className='Link' to="/login">Login</Link>
            </li>

             <li>
              <Link className='Link' to="/college">College</Link>
            </li>

             <li>
              <Link className='Link' to="/users">User</Link>
            </li>
             <li>
              <Link className='Link' to="/users/list">List</Link>
            </li>
           </ul>
        </div>
    </div>

<Outlet/>

   </div>

   
  )
}

export default Navbar