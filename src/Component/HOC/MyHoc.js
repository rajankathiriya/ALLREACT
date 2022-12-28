import React from 'react'
import FooterHOC from './FooterHOC'
import HeaderHOC from './HeaderHOC'

const MyHoc = (Component) => () => (
    <div>
        <HeaderHOC />
        <div>
            <Component />
        </div>
        <FooterHOC />
    </div>


)

export default MyHoc
