import { React, useState } from 'react';
import UseeffectLimitlevel2 from './UseeffectLimitlevel2';

const Counteruseeffect = () => {
    const [text, setText] = useState("1");//Main-Textbox
    const [data, setdata] = useState("1");

    const myHandler = (e) => {
        setText(e.target.value);
    };
    const MyClick = (e) => {
        setdata(text);
    };

    return (
        <div>
            <input type="text" value={text} onChange={myHandler} />
            <button onClick={MyClick}>click</button>
            <h3>{data}</h3>
            <UseeffectLimitlevel2 datavalue={data} />
        </div>
    );
}

export default Counteruseeffect;
