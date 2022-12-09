import { React, useState, useCallback } from 'react'
import ReactMemo2 from './ReactMemo2';

export default function ReactMemo() {
    const [data, setdata] = useState('');
    const [item, setitem] = useState([]);

    const myHandler = (e) => {
        setdata(e.target.value)
    }

    const mySubmit = (e) => {
        let mitem = [...item]
        mitem.push(data)
        setitem(mitem)
    }
    // USEMEMO

    const remove =
        useCallback((index) => {
            let mitem = [...item]
            mitem.splice(index, 1)
            setitem(mitem)
        }, [])
    return (
        <div>
            <input type="text" onChange={myHandler} />
            <button onClick={mySubmit}>Save</button>

            <ReactMemo2 data={item} remove={remove} />
        </div>
    )
}
