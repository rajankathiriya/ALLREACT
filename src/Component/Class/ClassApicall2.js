import React, { Component } from 'react'

export default class ClassApicall2 extends Component {
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.alldata.albumId} </td>
                    <td>{this.props.alldata.title} </td>
                    <td>{this.props.alldata.url} </td>
                    <td>{this.props.alldata.thumbnailUrl} </td>
                </tr>
            </>

        )
    }
}

