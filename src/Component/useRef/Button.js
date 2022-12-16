import React, { useRef } from 'react'

export default function Button() {
    const Mycolor = useRef()

    const myClick = () => {

    }
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={myClick}>Click</button>
        </div>
    )
}
