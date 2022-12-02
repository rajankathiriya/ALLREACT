import axios from 'axios'
import React, { Component } from 'react'
import ClassApicall2 from './ClassApicall2'

class ClassApicall extends Component {

    state =
        {
            record: []
        }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(r => {
                this.setState({ record: r.data })
            })
    }

    render() {
        return (
            <div>
                {this.state.record.map((v) => {
                    return (
                        <ClassApicall2 alldata={v}></ClassApicall2>
                    )
                })}
            </div>
        )
    }
}
export default ClassApicall;


