import axios from 'axios';
import { React, useState, useEffect } from 'react';

const TestAPI4 = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://api.fda.gov/food/enforcement.json?limit=10')
            .then((r) => { setdata(r.data) })
    }, []);
    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    {data?.results?.map((val) => {
                        return (
                            <tr>
                                <td>{val.country}</td>
                                <td>{val.city}</td>
                                <td>{val.address_1}</td>
                                <td>{val.reason_for_recall}</td>
                                <td>{val.product_quantity}</td>
                                <td>{val.code_info}</td>
                                <td>{val.center_classification_date}</td>
                                <td>{val.distribution_pattern}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TestAPI4;
