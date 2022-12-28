import React from 'react'

export const ErrorFallback = ({ error, resetErrorBoundary }) => {

    return (
        <div>

            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary} className='btn btn-outline-danger'>Try again</button>

        </div>
    )
}
