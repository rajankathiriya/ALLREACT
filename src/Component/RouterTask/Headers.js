import React from 'react'
import { Link } from 'react-router-dom'

export default function Headers() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-automx-3">
                        <li className="nav-item active">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='mx-3'>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        <li className=''>
                            <Link to={'/user'}>User</Link>
                        </li>
                        <li className='mx-3'>
                            <Link to={'/about'}>About</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
