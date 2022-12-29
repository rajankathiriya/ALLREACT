import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'


export default function HeaderHOC() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-automx-3">
                            <li className="nav-item active mx-2">
                                <CustomLink to={'/'}>Home</CustomLink>
                            </li>
                            <li className="nav-item active">
                                <CustomLink to={'/login'}>Login</CustomLink>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
