import React from 'react'

export default function Tasktest2print(data) {
    return (
        <div className="m-2">
            <div className=' w-100 p-4 rounded-3' style={{ backgroundColor: "rgb(206 193 193 / 41%)" }}>
                <div>
                    <table>
                        <thead>
                            <th>ID </th>
                            <th>Name </th>
                            <th>UserId </th>
                            <th>Email </th>
                            <th>street</th>
                            <th>suite</th>
                            <th>city</th>
                            <th>zipcode</th>
                            <th>Phone </th>
                            <th>Website </th>
                            <th>Company </th>
                            <th>Delete </th>
                        </thead>
                        <tbody>

                            {data.alldata
                                .map((item, index) => {
                                    return (

                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.street}</td>
                                            <td>{item.suite}</td>
                                            <td>{item.city}</td>
                                            <td>{item.zipcode}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.website}</td>
                                            <td>{item.cname}</td>
                                            <td><button onClick={() => { data.remove(index) }} className='form-control btn btn-outline-danger' >Delete</button><br /><br /></td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>

                </div>


            </div>
        </div >
    )
}
