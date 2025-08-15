import React from 'react'

const Wrapper = ({children,color}) => {
  return (
    <div style={{ color :color , border: "4px solid red",width:"200px",margin:"10px" }}>
         {children}
    </div>
  )
}

export default Wrapper