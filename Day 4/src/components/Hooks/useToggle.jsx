// khud ka hook 

import React, { useState } from 'react'

const useToggle = (defValue) => {

  const [value,setVal] = useState(defValue)

  function toggleValue(val) {

    if(typeof val != 'boolean')
    {

      setVal(!value)

    }

    else {
      setVal(val)
    }
    
  }

  return [value,toggleValue]
}

export default useToggle