import { React, useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    const getData = async () => {
        let response = await fetch(url)
        let maindata = await response.json()
        setdata(maindata)
        setloading(false)
    }
    useEffect(() => {
        getData();
    }, [url]);
    return { data, loading }
}
