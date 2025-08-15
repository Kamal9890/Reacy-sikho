import React, { useRef } from 'react'

function UseRefHook() {

    const inputRef = useRef(null)

    const inputHandler=()=>{

        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="red"
        

    }


    const toggleHandler =()=>{
         if(inputRef.current.style.display !="none")
         {
             inputRef.current.style.display ="none"
         }
         else 
         {
            inputRef.current.style.display = "inline"
         }

    }

  return (
    <div>
        <h1>Use ref </h1>

        <button onClick={toggleHandler} >Togglr</button>
            
            <input ref={inputRef} type="text" placeholder='Enter your name '  />
            <button onClick={inputHandler}>Focuns on input field </button>
       
    </div>
  )
}

export default UseRefHook