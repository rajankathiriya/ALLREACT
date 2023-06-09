// import React from 'react'
// import { useSelector, useDispatch } from "react-redux"
// import USERdata, { addUser } from './Reducer'

// const Counter111 = () => {
//     const data = useSelector(y => y.user)
//     const dis = useDispatch()

//     const adddata = (id) => {
//         dis(addUser())
//     }
//     return (
//         <div>
//             <button onClick={adddata}>++</button>
//             {data}
//         </div>
//     )
// }

// export default Counter111
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Add, Clear, Remove } from "./Reducer";

const COUNTER111 = () => {
    const data = useSelector(y => y.user);
    const dis = useDispatch()

    const ADD = () => {
        dis(Add())
    }

    const DEL = () => {
        dis(Remove())
    }

    const ALL = () => {
        dis(Clear())
    }

    return (
        <>
            <button onClick={ADD}>++</button>
            <button onClick={DEL}>--</button>
            <button onClick={ALL}>-ALL-</button>
            <h1>{data}</h1>
        </>
    )
}

export default COUNTER111