import { React, useState, useEffect } from 'react';

const UseeffectLimitlevel2 = (props) => {
    const [Data, setData] = useState([]);

    console.log(props);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=" + props.datavalue)
            .then((y) => y.json())
            .then((y) => {
                setData(y);

                console.log(y);
            });
    }, [props.datavalue]);
    return (
        <div >
            <h1 >{Data.map((val) => {
                return (
                    <h1 className='text-dark'>{val.id}</h1>
                )
            })}</h1>
        </div>
    );
}

export default UseeffectLimitlevel2;
