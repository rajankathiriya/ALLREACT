import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Css() {
    return (
        <div>
            <h1 className="text-center">CSS</h1><hr />

            <Outlet />
        </div>
    )
}
