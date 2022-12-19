import React, { useReducer, useState } from 'react';
import Mydata from '../Mydata';

const MYreducerlevel2 = () => {

    const myreducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return [...state, action.payload]

            case "DELETE":
                const mdata = [...state]
                mdata.splice(action.payload, 1)

                return mdata;
            // const Myedit = (index) => {
            //     let maindata = data[index]
            //     setitem(maindata);
            //     setadd(index);
            // }

            default:
                return state
        }
    }
    const [data, setdata] = useState('');
    const [item, setitem] = useReducer(myreducer, [])

    const myHandler = (e) => {
        setdata(e.target.value)
    }
    const mySubmit = () => {
        setitem({ type: "ADD", payload: data })
    }
    const myDelete = (e) => {
        setitem({ type: "DELETE", payload: e })
    }
    const myEdit = (e) => {
        setitem({ type: "EDIT", payload: e })
    }


    return (
        <div >
            <input type="text" value={data} onChange={myHandler} />
            <input type="button" value="Save" onClick={mySubmit} />

            {item.map((val, index) => {
                return (
                    <h5 className='text-black'>{val}
                        <input type="button" value="Delete" onClick={() => { myDelete(index) }} />
                        <input type="button" value="Edit" onClick={() => { myEdit(index) }} /></h5>
                )
            })}
        </div>
    );
}

export default MYreducerlevel2;
