import React from 'react';

const Items = (mydata) => {
    return (
        <div>
            {
                mydata.mydata.map((item, index) => {
                    return (
                        <>
                            <div>Contact Name: {item.cname}</div>
                            <div>Contact Number: {item.cnumber}</div>
                            <button onClick={() => { mydata.remove(index) }}>Delete</button>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Items;
