import axios from 'axios';
import { React, useState, useEffect } from 'react';

const TestAPI6 = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://date.nager.at/api/v2/publicholidays/2020/US")
            .then((r) => {
                setdata(r.data)
            })
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <th>date</th>
                    <th>localName</th>
                    <th>name</th>
                    <th>countryCode</th>
                    <th>fixed</th>
                    <th>global</th>
                    <th>counties</th>
                    <th>launchYear</th>
                    <th>type</th>
                </thead>
                <tbody>
                    {data.map((val) => {
                        return (
                            <tr>
                                <td>{val.date}</td>
                                <td>{val.localName}</td>
                                <td>{val.name}</td>
                                <td>{val.countryCode}</td>
                                <td>{val.fixed}</td>
                                <td>{val.global}</td>
                                <td>{val.counties}</td>
                                <td>{val.launchYear}</td>
                                <td>{val.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TestAPI6;
