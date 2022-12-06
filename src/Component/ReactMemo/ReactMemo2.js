import React from 'react'

function ReactMemo2(data) {
    console.log(data);
    return (
        <div>ReactMemo2</div>
    )
}

export default React.memo(ReactMemo2)
