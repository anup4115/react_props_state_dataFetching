import React, { useState } from 'react'

const State = () => {
    const [value,setValue] = useState("Initial value befor update")
    const handleOnClick=()=>{
        setValue("Final value after update")
    }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleOnClick} >Update Text</button>
    </div>
  )
}

export default State
