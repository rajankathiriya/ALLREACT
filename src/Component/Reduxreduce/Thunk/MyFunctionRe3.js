import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

const Increment = () => {
    return { type: "PLUS" };
}


function MyFunRd3(props) {


    return (
        <div>{props.count}

            <button onClick={() => { props.Increment() }}>Inc</button>

        </div>
    )
}

export default connect(mapStateToProps, { Increment })(MyFunRd3)