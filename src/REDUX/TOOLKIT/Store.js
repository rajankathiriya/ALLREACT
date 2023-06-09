// import { configureStore } from "@reduxjs/toolkit";
// import USERdata from './Reducer'

// const STORE2 = configureStore({
//     reducer: {
//         user: USERdata
//     }
// })


// export default STORE2

import { configureStore } from '@reduxjs/toolkit'
import USERdata from './Reducer'

const STORE2 = configureStore({
    reducer: {
        user: USERdata
    }
})

export default STORE2