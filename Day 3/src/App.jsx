import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hooks from './Hooks/Hooks'
import PropsHook from './Hooks/PropsHook'
import UseRefHook from './Hooks/UseRefHook'
import UnControlled from './Hooks/UnControlled'
import User from './Hooks/User'


function App() {
  const [count, setCount] = useState(0)



   const displayName =(name)=>{
    alert(name);
    
   }


  return (
    <div>
      {/* <Hooks/> */}

      {/* <PropsHook/> */}

      {/* <UseRefHook/> */}
      {/* <UnControlled/> */}

      <h1> Call parent component funtion from child componets</h1>

      <User  displayName = {displayName} name="kamal"/>
       <User  displayName = {displayName} name="raja" />
        <User  displayName = {displayName} name="kamal" />
    </div>
  )
}

export default App
