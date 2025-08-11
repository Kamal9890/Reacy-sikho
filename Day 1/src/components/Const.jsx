import React from 'react'

const Const = () => {
    const name =""

    function fruit(params) {
        return "Apple"
    }

    function sum(a,b) {
        return a+b
    }


    const userUbj = {
        name:"kamal",
        email:"kamal@gmaul.com",
        age:"20"
    }


    const userArr=["kamal","10"]
  return (
    <div>
        <h1>Kamal pandey</h1>
        <h1>{name ? name :"user not found"}</h1>
        {fruit()}
       <h1> {sum(100,200)}</h1>

       <h1>{userUbj.email}</h1>
       <h1>{userArr[0]} </h1>


    

    </div>
  )
}

export default Const