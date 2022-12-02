import React from 'react'
import { useState, useEffect } from 'react'; 
export default function Fetch() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        // fetch(" https://fakestoreapi.com/products")
        // fetch(" https://api.escuelajs.co/api/v1/categories")
        fetch(" https://jsonplaceholder.typicode.com/users")
            .then(r => r.json())
            .then(r => {
                setdata(r)
            })
    }, []);

    const Assending = () => {
        let mydata1 = [...data];
        mydata1.sort(function(a,b) {
            if(a.id > b.id)
            return 1;
            else
            return -1;   
          })
          setdata(mydata1)
    }
    const Desending = () => {
        let mydata1 = [...data]; 
        mydata1.sort(function(a,b) {
            if(a.id > b.id)
            return -1
            else
            return 1;
          })       
          setdata(mydata1)
    }

    return (
        <>
            {data.map((value, index) => {
                return (
                    // <div className='d-flex text-center'  id='rajan'>
                    //     <div className="card w-25 m-3 align-items-center space-between" >
                    //         <div className="card-body ">
                    //             <h1>{data[index].category}</h1>
                    //             <h5 className="card-title">{data[index].title}</h5>
                    //             <h5 className="card-title">${data[index].price}</h5>
                    //             <p className="card-text">{data[index].description}</p>
                    //             {/* <p ></p> */}
                    //             <img src={data[index].image} className='w-100 text-center' alt="" />
                    //             <p >{data[index].rating.rate}</p>
                    //             <a href="#" className="btn btn-primary">Go somewhere</a>
                    //         </div>
                    //     </div>
                    // </div>

                    // <table>
                    //     <tr>
                    //         <td>{value.id}</td>
                    //         <td>{value.name}</td>
                    //         <td><img src={value.image} className="w-50" alt="" /></td>
                    //     </tr>
                    // </table>

                    <>
                        <table>
                            <tr>
                                {/* <td>{value.id}</td> */}
                                <td>{value.id}</td>
                                {/* <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.address.street}</td>
                                <td>{value.address.suite}</td>
                                <td>{value.address.city}</td>
                                <td>{value.address.zipcode}</td>
                                <td>{value.address.geo.late}</td>
                                <td>{value.address.geo.lng}</td> */}
                            </tr>
                        </table>
                    </>
                )
            })}

            <button onClick={Assending}>Assending</button>
            <button onClick={Desending}>Desending</button>
        </>
    )
}
