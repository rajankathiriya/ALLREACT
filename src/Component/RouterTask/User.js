import React from 'react'
import { Outlet } from 'react-router-dom'


export default function User() {
    return (
        <div>
            this is User data<br />
            this is User data<br />
            <Outlet />
            this is User data<br />
            this is User data<br />
        </div>
    )
}
