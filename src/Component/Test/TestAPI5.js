import axios from 'axios';
import { React, useState, useEffect } from 'react';

const TestAPI5 = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        // fetch('https://api.punkapi.com/v2/beers')
        //     .then(r => r.json())
        //     .then((r) => {
        //         setdata(r)
        //     })
        axios.get('https://api.punkapi.com/v2/beers')
            .then((r) => { setdata(r.data) })
    }, []);
    return (
        <div>
            <table>
                <thead>

                    <th>id</th>
                    <th>name</th>
                    <th>tagline</th>
                    <th>first_brewed</th>
                    <th>description</th>
                    <th>image</th>
                    <th>abv</th>
                    <th>ibu</th>
                    <th>target_fg</th>
                    <th>target_og</th>
                    <th>ebc</th>
                    <th>srm</th>
                </thead>
                <tbody>
                    {data.map((val) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.tagline}</td>
                                <td>{val.first_brewed}</td>
                                <td>{val.description}</td>
                                <td><img src={val.image_url} alt="" /></td>
                                <td>{val.abv}</td>
                                <td>{val.ibu}</td>
                                <td>{val.target_fg}</td>
                                <td>{val.target_og}</td>
                                <td>{val.ebc}</td>
                                <td>{val.srm}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TestAPI5;
