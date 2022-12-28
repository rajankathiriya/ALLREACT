import React from 'react'
import HeaderHOC from './HeaderHOC'
import FooterHOC from './FooterHOC'

const MyHoc = (Component) => () => (
    <>
        <HeaderHOC />
        <div>
            <Component />
        </div>
        <FooterHOC />
    </>
)

export default MyHoc
