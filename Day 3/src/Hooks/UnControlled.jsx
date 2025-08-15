import React, { useRef } from 'react'

function UnControlled() {

    const userref = useRef()
    const passref = useRef()


    const handleForm=(event)=>{
        event.preventDefault()
        const user = document.querySelector("#user").value
         const password = document.querySelector("#password").value
         console.log(user,password);
         
         
        
    }


        const handleFormRef=(event)=>{
            event.preventDefault()

            const user = userref.current.value
             const password = passref.current.value


            console.log(user,password);
            
        }



  return (
    <div>
        <h1>UnControlled</h1>
        <form action="" method='post' onSubmit={handleForm}>
            <input type="text" id="user" placeholder='Enter User Name ' />
            <br /><br />

             <input type="password" id="password" placeholder='Enter User password  ' />

             <button>Submit </button>
        </form>


        <hr />


         <h1>uncontrolled With use ref</h1>
         <form action="" method='post' onSubmit={handleFormRef}>
            <input type="text" ref={userref} id="userref" placeholder='Enter User Name ' />
            <br /><br />

             <input type="password" ref={passref} id="passwordref" placeholder='Enter User password  ' />

             <button>Submit ref </button>
        </form>
    </div>
  )
}

export default UnControlled