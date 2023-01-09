import axios from 'axios';
import { React, useState, useEffect } from 'react';

const Apicall = () => {
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState('');
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments").then(y => y.json()).then((y) => { setdata(y) })
    }, [])

    const handler = (e) => {
        setsearch(e.target.value)
    }
    return (
        <div>
            <input type="search" value={search} onChange={handler} />
            {data.filter((val) => {
                return (val.name.toUpperCase().indexOf(search.toUpperCase()) >= 0)
            })
                .map((val) => {
                    return (
                        <>
                            {val.name}
                        </>
                    )
                })}
        </div>
    );
}

export default Apicall;
