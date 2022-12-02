import React from 'react'
import './Mytask.css'
import { useState } from 'react';
import menu from './Task';

import r from './Image/item-1.jpeg'

export default function Mytask() {
    const [Index, setIndex] = useState(0);
    return (
        <div>
            <section className="menu">
                {/* <!-- title --> */}
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                {/* <!-- filter buttons --> */}
                <div className="btn-container">
                    <button type="button" className="filter-btn" data-id="all">all</button>
                    <button type="button" className="filter-btn" data-id="breakfast">
                        breakfast
                    </button>
                    <button type="button" className="filter-btn" data-id="lunch">lunch</button>
                    <button type="button" className="filter-btn" data-id="shakes">
                        shakes
                    </button>
                </div>
                {/* <!-- menu items --> */}

            </section>
            <section className='menu'>
                <div className="section-center">
                    {menu.map((value) => {
                        return (

                            <article className="menu-item">
                                <img src={r} alt="menu item" className="photo" />
                                <div className="item-info">
                                    <header>
                                        <h4>${value.title}</h4>
                                        <h4 className="price">{value.price}</h4>
                                    </header>
                                    <p className="item-text">
                                        {value.desc}
                                    </p>
                                </div>
                            </article>

                        )
                    })}
                </div>
            </section>
        </div>
    )
}
