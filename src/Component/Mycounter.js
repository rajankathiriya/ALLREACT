import React from 'react'
import { useState } from 'react';

export default function Mycounter() {
  const [number, setNumber] = useState(0)
  const [print, setPrint] = useState(0);

  const inputHandler = (e) => {
    setNumber(e.target.value)
  }

  const Display = () => {
    setPrint(parseInt(number) + print)
  }
  return (
    <>
      <input type="text" onChange={inputHandler} value={number} />
      <button onClick={Display}  >Click</button>
      {print}
    </>
  )
}
