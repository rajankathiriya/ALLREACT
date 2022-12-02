import { React, useState, useEffect } from 'react';
import axios from 'axios'
import Cardlayout from './Cardlayout';


const Simpleprops = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        // axios.get("https://fakestoreapi.com/products")
        //     .then((e) => {
        //         setdata(e.data)
        //     })
        fetch("https://fakestoreapi.com/products")
            .then(r => r.json())
            .then((r) => {
                setdata(r)
            })
    }, []);
    return (
        <div className='row'>
            {data.map((val) => {
                return (<Cardlayout record={val}></Cardlayout>)
            })}
        </div>
    );
}

export default Simpleprops;
