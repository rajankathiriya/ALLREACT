import React from 'react'
import { useFetch } from './useFetch'

export default function Example1() {
    const { loading, data } = useFetch("https://jsonplaceholder.typicode.com/posts")
    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {data.map((val) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.body}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
