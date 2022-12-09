import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Decrement, Division, Increment, Multiplication } from './Action/Action'

export default function Counter() {
    const data = useSelector(y => y);


    const mydisp = useDispatch();

    const increment = () => {
        mydisp(Increment())
    }
    const decrement = () => {
        mydisp(Decrement())
    }
    const multiplication = () => {
        mydisp(Multiplication())
    }
    const division = () => {
        mydisp(Division())
    }
    return (
        <div>
            {data}<br />

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={multiplication}>Multiplication</button>
            <button onClick={division}>Division</button>
        </div>
    )
}
