import { React, useEffect, useState } from 'react'
import Tasktest2print from './Tasktest2print';

export default function Tasktest2props() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(t => t.json())
            .then(r => {
                setdata(r)
            })
    }, []);
    return (
        <div>
            {data.map((v) => {
                return (
                    <div>
                        <Tasktest2print
                            id={v.id}
                            name={v.name}
                            username={v.username}
                            email={v.email}></Tasktest2print>
                    </div>
                )
            })}
        </div>
    )
}
