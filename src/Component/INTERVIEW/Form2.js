import React from 'react';

const Form2 = (props) => {
    return (
        <div>
            {props?.alldata.filter((val) => {
                return (
                    val.title.indexOf(props.find) >= 0
                )
            })
                .map((val, index) => {
                    return (
                        <>
                            <h6>name:{val.title}</h6>
                            <h6>name:{val.name1}</h6>
                            <h6>name:{val.name2}</h6>
                            <h6>name:{val.name3}</h6>
                            <h6>name:{val.name4}</h6>
                            <button onClick={() => { props.remove(index) }}>delete</button>
                            <button onClick={() => { props.add(index) }}>add</button>
                        </>
                    )
                })}

        </div>
    );
}

export default Form2;
