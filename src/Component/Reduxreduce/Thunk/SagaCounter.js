import React from 'react';
import { useDispatch, useSelector } from "react-redux"

const SagaCounter = () => {
    const count = useSelector(y => y.counter)

    const myDis = useDispatch()

    const Increment1 = () => {
        myDis({ type: "Increment" })
    }
    const Decrement1 = () => {
        myDis({ type: "Decrement" })
    }
    const Multiplication1 = () => {
        myDis({ type: "Multiplication" })
    }
    const Division1 = () => {
        myDis({ type: "Division" })
    }
    return (
        <div>
            {count}
            <button onClick={Increment1}>Increment</button>
            <button onClick={Decrement1}>Decrement</button>
            <button onClick={Multiplication1}>Multiplication</button>
            <button onClick={Division1}>Division</button>
        </div>
    );
}

export default SagaCounter;
