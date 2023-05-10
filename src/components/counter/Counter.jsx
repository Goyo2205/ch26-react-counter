import React, { useState } from 'react'
import { Button } from '../button/Button';


export const Counter = ({ initialValue, increment=1,decrement=1}) => {

    const [counter, setCounter] = useState(initialValue)//salio facil de useState snippet

    const handleIncrement =()=>{
        setCounter(counter + increment);
    }
     
    const handleDecrement =()=>{
        setCounter(counter - decrement);
    }

    const handleReset = ()  =>{
        setCounter(initialValue)
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={handleDecrement}>-</Button>
            <Button onClick={handleReset}>Reset</Button>
        </>
  )
}
/* 
  Hacer un componente para el botón.
  atributo: increment={5}
  atributo: increment={-5}
  atrubito: onClick={fncCallBack}
  color text: blue;

*/
