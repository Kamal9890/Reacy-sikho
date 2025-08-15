import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Props'
import User from '../User'
import ArrayProps from '../ArrayProps'
import Student from './Student'
import UserProps from './components/AdvancedComponents/UserProps'
import Input from './components/Inputfeild.jsx/Input'
import Controll from './components/Controll'
import CheckBox from './components/CheckBox'
import RadioButton from './components/RadioButton'
import Array from './components/Array'
import ReUseComponent from './components/ReUseComponent'
import Clock from './components/Clock'
import NestedLooping from './components/NestedLooping'

function App() {
  
  const [color,setColor]= useState("green")





  return (
    <>
    <div>
        {/* <User/> */}
        {/* <ArrayProps/> */}

        {/* <Student/> */}

        {/* <UserProps/> */}

        {/* <Input/> */}

        {/* <Controll/> */}

{/* <h1>Handle checkbox </h1>
        <CheckBox/> */}

        {/* <RadioButton/> */}





        {/* <Array/> */}

        {/* <ReUseComponent/> */}

       {/* <h1>Digital clock</h1>

        <select onChange={(e) => setColor(e.target.value)}>

          <option value="red">red</option>
          <option value="blue">Blue</option>
          <option value="yellow">yellow</option>

        </select>


        <Clock color = {color}/>  */}




        <NestedLooping/>
    </div>
   
     
    </>
  )
}

export default App
