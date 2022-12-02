import { React, useState, useEffect } from 'react';
import axios from 'axios'
import Task1propsdata from './Task1propsdata'

const Task1props = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((r) => {
                setdata(r.data)
            })
    }, []);
    return (
        <div className='row'>
            {
                data.map((val) => {
                    return (<Task1propsdata alldata={val}></Task1propsdata>)
                })
            }
        </div>
    );
}

export default Task1props;
