import React from 'react'
import { useState } from 'react';
import './Magic.css'

export default function Magic() {
    const [name, setName] = useState("");
    const [display, setDisplay] = useState();

    const magic = name.split('').reverse('').join('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    const printbtn = () => {

        magic == name ? setDisplay(<h1>🥳</h1>) : setDisplay(<h1>😅</h1>)

        if (name == "") {
            setDisplay(<h1>😵‍💫</h1>)
        }
    }


    return (
        <div id='magic'>

            <div class="d-flex ">
                <input class=" me-2 rounded-1 w-100 form-control" type="text" placeholder="Please enter value" onChange={inputHandler} value={name} autoCorrect='off' />
                <button class="btn btn-primary" type="button" onClick={printbtn}>Click</button>
            </div><br />

            <h5>{display}</h5>
        </div>
    )
}
