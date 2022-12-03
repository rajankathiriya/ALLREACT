import { React, useState } from 'react';
import Items from './Items';

const Item = () => {
    const [data, setdata] = useState([]);
    const [item, setitem] = useState({
        cname: '',
        cnumber: ''
    });



    const myDelete = (index) => {
        let mdata = [...data]
        mdata.splice(index, 1)
        setdata(mdata)
    }

    const myHandler = (e) => {
        setitem({ ...item, [e.target.name]: e.target.value })
    }

    const mySubmit = (e) => {
        e.preventDefault()
        let maindata = [...data]
        maindata.push(item)
        setdata(maindata)
    }
    return (
        <div>
            <form onSubmit={mySubmit}>
                <input type="text" name="cname" onChange={myHandler} placeholder='your name' />
                <input type="text" name="cnumber" onChange={myHandler} placeholder='your number' />
                <input type="submit" value="Add" />
            </form>
            <Items mydata={data} remove={myDelete} />
        </div>
    );
}

export default Item;
