import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UseeffectLimitlevel2 from '../Useeffect/UseeffectLimitlevel2';
import { Decrement, Division, Increment, Multiplication } from './Action/Action'

export default function Counter() {
    const [state, setstate] = useState(10);
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
            {/* 
            <UseeffectLimitlevel2 datas={state} /> */}
        </div>
    )
}
