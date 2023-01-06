import React from 'react'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        count: state.counter
    }

}

function MyFunctionRe1({ count, dispatch }) {

    const increment = () => {
        dispatch({ type: "PLUS" })
    }
    return (
        <div>

            {count}

            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default connect(mapStateToProps)(MyFunctionRe1)

