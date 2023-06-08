import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, Multy } from './Action';

const CounterNEW = () => {

    const data = useSelector(y => y.newTest)
    const mydiv = useDispatch()

    const Add = () => {
        mydiv(Increment())
    }
    const Del = () => {
        mydiv(Decrement())
    }
    const Mul = () => {
        mydiv(Multy())
    }
    return (
        <div>
            <button onClick={Add}>++</button>
            <h1>{data}</h1>
            <button onClick={Del}>--</button>
            <button onClick={Mul}>*****</button>
        </div>
    );
}

export default CounterNEW;
