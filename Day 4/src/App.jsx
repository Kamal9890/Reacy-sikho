import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DerivedState from './DerivedState'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'
import UseActionHiik from './components/Hooks/UseActionHiik'
import UseIdHook from './components/Hooks/UseIdHook'
import useToggle from './components/Hooks/useToggle'
import College from './components/Api/College'
import { SubjectContextt } from './components/Api/ContextApi'

function App() {
        const [value,toggleValue]=useToggle(true)

        const [subject,setSubject]= useState("English")


  return (
    <>
        <div style={{backgroundColor:"yellow", padding:10}}>

          {/* <DerivedState/> */}
          
          {/* lifting up state  */}
          {/* <AddUser setUser={setUser}/>
          <DisplayUser user ={user}/> */}

          {/* <UseActionHiik/> */}
          {/* <UseIdHook/>
          <UseIdHook/> */}


            {/* <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={()=>toggleValue(false)}>Hide Heading</button>
            <button onClick={()=>toggleValue(true

            )}>Show heading</button>

        { value ? <h1>Custom hooks in react js </h1> :""} */}




        {/* contetxt Api  */}
        
{/* 
         <SubjectContextt.Provider value={subject}>
          <select value={subject} onChange={(e)=> setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Math">Mathh</option>
            <option value="English">English</option>
            <option value="History">History</option>

          </select>
          <h1>Context Api</h1>
          <button onClick={()=>setSubject()}>Clear Subject</button>
          <College/>
         </SubjectContextt.Provider> */}
        </div>
     </>
  )
}

export default App
