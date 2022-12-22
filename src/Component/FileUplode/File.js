import { React, useState, useEffect } from 'react'
import axios from 'axios'

export default function File() {
    const [data, setdata] = useState(null);
    const [data1, setdata1] = useState([]);

    const myHandler = (e) => {
        console.log(e.target.files[0]);
        setdata(e.target.files[0])
    }

    const mydataSubmit = () => {
        const fdata = new FormData();
        fdata.append("file", data)
        axios.post("http://localhost:8080/upload", fdata).then(y => {
            console.log(y.data);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/files")
            .then(r => {
                setdata1(r.data);
            })
    }, []);

    return (
        <div>
            <input type="file" onChange={myHandler} />
            <input type="button" value="Save" onClick={mydataSubmit} />

            <table>
                {data1.map((val) => {
                    return (
                        <>
                            <tr>
                                <td>{val.name}</td>
                                <td>{val.url}</td>
                                <td><a href={val.url}>Download</a></td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </div >
    )
}
