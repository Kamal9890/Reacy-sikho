import React, { useActionState, useState } from 'react'

const UseActionHiik = () => {

  

    const handlSubmit= async (prevData,formData) => {
        let name = formData.get('name')
        let pass = formData.get('password')

        await new Promise(res=>setTimeout(res,2000))

        if (name && pass) {

            return {message:"Data Submitted",name,pass}
            
        }

        else {
            return {error :"Failed to submit enter data ",name,pass}
            
        }
    }

      const [data,action,pending]=useActionState(handlSubmit,undefined)
      console.log(data);
      

  return (
    <div>
        <h1>UseAction Hook in react js </h1>

       <form action={action} >
         <input type="text" placeholder='Enter name ' name='name' />
        <br /><br />
        <input type="text" placeholder='Enter Password ' name='password' />
        <br /><br />

        <button disabled= {pending}>Submit data </button>
        
       </form>

       <br /><br />
        {
            data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }

        {
            data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }


        <h3>Name:{data?.name}</h3>
        <h4>Password :{data?.pass}</h4>

        
    </div>
  )
}

export default UseActionHiik