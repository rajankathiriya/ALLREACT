// import { configureStore } from '@reduxjs/toolkit'
// import Reducertoool from '../Reducertoool'

// const store = configureStore({
//     reducer: {
//         counter: Reducertoool
//     }
// });

// export default store


import { configureStore } from '@reduxjs/toolkit'
import Reducertooold from '../Reducertoool'

const storeeasythunk = configureStore({
    reducer: {
        post: Reducertooold
    }
})

export default storeeasythunk
