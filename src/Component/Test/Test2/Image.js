import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Display from './Display';

export default function Image() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(r => {
                setdata(r.data)

            })
    }, []);
    return (
        <div>
            {data.map((val) => {
                return (
                    <div className='w-25 mx-auto'><br />
                        <Display imagess={val.url} />
                    </div>
                )
            })}
        </div>
    )
}
