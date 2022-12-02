import axios from 'axios';
import { React, useState, useEffect } from 'react';

const TestAPI2 = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
            .then((r) => {
                setdata(r.data)
            })

    }, []);
    return (
        <div>
            <table>
                <thead>
                    <th>disclosure_year</th>
                    <th>disclosure_date</th>
                    <th>transaction_date</th>
                    <th>owner</th>
                    <th>ticker</th>
                    <th>asset_description</th>
                    <th>type</th>
                    <th>amount</th>
                </thead>
                <tbody>
                    {data.map((val) => {
                        return (
                            <tr>
                                <td>{val.disclosure_year}</td>
                                <td>{val.disclosure_date}</td>
                                <td>{val.transaction_date}</td>
                                <td>{val.owner}</td>
                                <td>{val.ticker}</td>
                                <td>{val.asset_description}</td>
                                <td>{val.type}</td>
                                <td>{val.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TestAPI2;
