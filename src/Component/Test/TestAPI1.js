import React, { useState, useEffect } from 'react';

const TestAPI1 = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://api2.binance.com/api/v3/ticker/24hr")
            .then(r => r.json())
            .then((r) => {
                setdata(r)
            })
    }, []);
    return (
        <>
            <table>
                <thead>
                    <th>symbol</th>
                    <th>priceChange</th>
                    <th>priceChangePercent</th>
                    <th>weightedAvgPrice</th>
                    <th>prevClosePrice</th>
                    <th>lastPrice</th>
                </thead>
                <tbody>
                    {data.map((val) => {
                        return (
                            <tr>
                                <td>{val.symbol}</td>
                                <td>{val.priceChange}</td>
                                <td>{val.priceChangePercent}</td>
                                <td>{val.weightedAvgPrice}</td>
                                <td>{val.prevClosePrice}</td>
                                <td>{val.lastPrice}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default TestAPI1;
