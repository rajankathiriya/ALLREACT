import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TEST = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/comments")
        //     .then(r => r.json())
        //     .then(r => setdata(r))

        axios.get("https://jsonplaceholder.typicode.com/comments", data)
            .then(r => setdata(r.data))
    }, [])


    return (
        <div>
            {data.map((val) => {
                return (

                    <>
                        {val.name}<br />
                    </>
                )
            })}
        </div>
    );
}

export default TEST;
