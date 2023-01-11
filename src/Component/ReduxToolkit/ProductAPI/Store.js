// import { configureStore } from '@reduxjs/toolkit'
// import Reducer from './Reducer'

// const storeProduct = configureStore({
//     reducer: {
//         product: Reducer
//     }
// })

// export default storeProduct

import { configureStore } from "@reduxjs/toolkit"
import Reducer from "./Reducer"

const storeProduct = configureStore({
    reducer: {
        product: Reducer
    }
})

export default storeProduct