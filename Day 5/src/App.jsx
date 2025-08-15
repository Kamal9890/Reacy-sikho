import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Router/Home'
import About from './Router/about'
import Login from './Router/Login'
import Navbar from './Router/Navbar'
import PageNotfound from './Router/PageNotfound'
import College from './Router/College'
import Student from './Router/Student'
import Department from './Router/Department'
import Details from './Router/Details'
import UserDynamic from './Router/UserDynamic'
import UserDetails from './Router/UserDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        {/* <Navbar/> */}


        <Routes>
          <Route element={<Navbar />} >
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/users/list?' element={<UserDynamic />}></Route>
            
            <Route path='/users/:id/:name?' element={<UserDetails />} />
          </Route>



          <Route path='/college' element={<College />}>

            <Route index element={<Student />} />
            <Route path='department' element={<Department />} />
            <Route path='details' element={<Details />} />

          </Route>
          {/* 404 not found  */}
          {/* <Route path='/*' element = { <PageNotfound/> }/> */}

          <Route path='/*' element={<Navigate to='/login' />} />
        </Routes>




      </div>


    </>
  )
}

export default App
