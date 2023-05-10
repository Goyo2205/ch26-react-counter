import React from 'react'
import '../../styles/button/button.css';

export const Button = ({ onClick, children}) => {
  return (
    <>
        <button  onClick={onClick}>{children}</button>
    </>
  )
}
