import React, { Component } from 'react';
import Compo2 from './Compo2';

class FormClassscomp extends Component {
    constructor() {
        super();
        this.state = {
            // array: [],
            // input: [],
            fname: "",
            lname: "",
            address: {
                city: "",
                state: "",
                zip: ""
            }
        }
    }

    myHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    mySubmit = (e) => {
        e.preventDefault()

        // let a = [...this.state.array]
        // a.push(this.state.input)
        // this.setState({ ...this.state, "array": a })
        console.log(this.state);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.mySubmit} className='w-50 mx-auto p-4'>
                    <label>First Name</label>
                    <input type="text" name="fname" className='form-control' onChange={this.myHandler} /><br />
                    <label>Last Name</label>
                    <input type="text" name="lname" className='form-control' onChange={this.myHandler} /><br />
                    <label><b>Address:</b></label><br />
                    <label>City:</label>
                    <input type="text" name="city" className='form-control' onChange={this.myHandler} /><br />
                    <label>State:</label>
                    <input type="text" name="state" className='form-control' onChange={this.myHandler} /><br />
                    <label>ZipCode:</label>
                    <input type="text" name="zip" className='form-control' onChange={this.myHandler} /><br />

                    <input type="submit" value="Save" className='form-control btn btn-outline-primary' />

                </form>
                {/* <h2>{this.state.array}</h2> */}
                <Compo2 />
            </div>
        );
    }
}

export default FormClassscomp;
