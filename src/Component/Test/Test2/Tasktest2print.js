import React from 'react'

export default function Tasktest2print(data) {
    return (
        <div className="container mt-3">
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
