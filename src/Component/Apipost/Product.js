import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderAuth from './HeaderAuth'


export default function Product() {
    const [data, setdata] = useState([]);
    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(y => y.json())
            .then(r => {
                setdata(r)
            })
    }, []);
    return (
        <>
            <HeaderAuth />
            <div className='row'>
                {data.map((val) => {
                    return (
                        <div className='text-center col-4 ' id='rajan'>
                            <div className="card  m-3 " >
                                <div className="card-body ">
                                    <h1>{val.category}</h1>
                                    <h5 className="card-title">{val.title}</h5>
                                    <h5 className="card-title">{val.price}</h5>
                                    <p className="card-text">{val.description}</p>
                                    {/* <p ></p> */}
                                    <img src={val.image} className='w-50 mx-auto' alt="" />
                                    <p >{val.rating.rate}</p>
                                    <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>

    )
}
