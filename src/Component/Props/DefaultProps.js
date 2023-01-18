import React from 'react'
import PropTypes from 'prop-types';

export default function DefaultProps(props) {
    return (
        <div>Hello {props.Name}</div>
    )
}

DefaultProps.defaultProps = {
    Name: "Rajan"
}

DefaultProps.prototype = {
    Name: PropTypes.oneOf("A"),
}
