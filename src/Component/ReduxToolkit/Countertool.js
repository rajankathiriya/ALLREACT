import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, inbynum, increment, incrementanddecrement } from './Reducertoool'

export default function Countertool() {
    const mydis = useDispatch()
    const counter = useSelector(y => y.counter)

    const [data, setdata] = useState(0);

    const Mytextbox = (e) => {
        setdata(e.target.value)
    }
    // const datasubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data);
    // }
    return (
        <div>
            <h1>{counter.value}</h1>
            <button onClick={() => { mydis(increment()) }}>Increment</button>
            <button onClick={() => { mydis(decrement()) }}>Decrement</button><br />
            <input type="text" onChange={Mytextbox} />
            <button onClick={() => { mydis(incrementanddecrement(data)) }}>IncrementbyNumber</button>

            {/* <input type="submit" value="save" /> */}
        </div>
    )
}
