import { React, useEffect, useState } from 'react';

const TestAPI3 = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
            .then(r => r.json())
            .then(r => { setdata(r) })
    }, []);
    return (
        <div>
            {data?.data?.map((val) => {
                return (
                    <tr>
                        <td>{val.Nation}</td>
                        <td>{val.Year}</td>
                        <td>{val.Population}</td>
                    </tr>
                )
            })}
        </div>
    );
}

export default TestAPI3;
