import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './Action/Action';

const Counterint = () => {
    const data = useSelector(y => y.numincdec)
    const myDis = useDispatch()

    const Incre = (e) => {
        myDis(Increment())
    }

    const Decre = (e) => {
        myDis(Decrement())
    }
    return (
        <div className='m-2'>
            <button onClick={Incre} className='p-3'>+</button>
            <span className='p-3'>{data}</span>
            <button onClick={Decre} className='p-3'>-</button>
        </div>
    );
}

export default Counterint;
