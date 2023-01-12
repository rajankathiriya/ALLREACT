import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Compo2 from './Compo2';

export default class Compo1 extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
            textname: ""
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    DataSubmit = (e) => {
        e.preventDefault()

        let a = [...this.state.array];
        a.push(this.state.textname);

        this.setState({ ...this.state, "array": a })


        // console.log(this.state);

    }

    render() {
        return (
            <div>
                <input type="text" name="textname" onChange={this.changeHandler} />
                <button onClick={this.DataSubmit}>Add</button><br />
                {this.state.array}


                <Compo2 />
            </div>
        )
    }
}
