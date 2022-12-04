import React from 'react'

export default function Tasktest2print(data) {
    return (
        <div>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
        </div>
    )
}
