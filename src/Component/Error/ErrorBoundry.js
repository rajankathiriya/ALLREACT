import React, { Component } from 'react';

class ErrorBoundry extends Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorinfo) {
        console.log(error);
        console.log(errorinfo);
    }
    render() {
        {
            if (this.state.hasError) {
                return (
                    <h2>Somthing wrong</h2>
                )
            }
            return this.props.children
        }
    }
}

export default ErrorBoundry;
