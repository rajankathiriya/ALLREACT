import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function TaskApiDelete() {
    const [data, setdata] = useState([]);
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(y => { setdata(y.data) })
    }, [data]);

    const DeleteElement = (index) => {
        const newFruits = fruits.filter((_, i) => i !== index);
        setFruits(newFruits);
    }
    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    {data.map((val, index) => {
                        return (
                            <tr>
                                <td>{val.userId}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>

                                <td><button onClick={() => DeleteElement(index)}>Delete</button></td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
