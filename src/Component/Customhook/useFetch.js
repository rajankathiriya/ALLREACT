import { React, useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    const getData = async () => {
        const responce = await fetch(url)
        const mydata = await responce.json()

        setdata(mydata)
        setloading(false)
    }
    useEffect(() => {
        getData();
    }, [url]);
    return { loading, data }
}
