import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(100)//salio facil de useState snippet

    const handleIncrement =()=>{
        setCounter(counter + 1);
    }
    
    const handleDecrement =()=>{
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button>Reset</button>
        </>
  )
}
