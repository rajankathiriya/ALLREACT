import React from 'react'

export default function Tasktest2print(data) {
    return (
        <div className="m-2">
            <div className=' w-100 p-4 rounded-3' style={{ backgroundColor: "rgb(206 193 193 / 41%)" }}>
                <div>
                    <table>
                        <thead>
                            <th> <td style={{ border: "none" }} >First Name </td></th>
                            <th> <td style={{ border: "none" }} >Last Name: </td></th>
                            <th> <td style={{ border: "none" }} >Email </td></th>
                            <th> <td style={{ border: "none" }} >Mobile </td></th>
                            <th> <td style={{ border: "none" }} >City </td></th>
                            <th> <td style={{ border: "none" }} >University </td></th>
                            <th> <td style={{ border: "none" }} >Edit </td></th>
                            <th> <td style={{ border: "none" }} >Delete </td></th>
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
                                            {/* <td><button className='form-control btn btn-outline-success' onClick={() => { props.edit(index) }}>Edit</button><br /><br /></td> */}
                                            {/* <td><button onClick={() => { props.remove(index) }} className='form-control btn btn-outline-danger' >Delete</button><br /><br /></td> */}
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
