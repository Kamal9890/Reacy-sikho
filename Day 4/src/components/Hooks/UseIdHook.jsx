import React, { useId } from 'react'

const UseIdHook = () => {

    const name = useId()
  return (
    <div>
        <form action="">
            <label htmlFor={name}>Enter user name </label>
            <input type="name"id={name} placeholder='enter name '/>
        </form>
    </div>
  )
}

export default UseIdHook