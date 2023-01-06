import { connect } from 'react-redux'
import React from 'react'

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "PLUS" })
    }
}


function MyFunctionRe2({ count, increment }) {
    return (
        <div>
            {count}
            <button onClick={() => { increment() }}>+++</button>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(MyFunctionRe2);

