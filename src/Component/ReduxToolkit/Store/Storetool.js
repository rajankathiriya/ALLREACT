import { configureStore } from '@reduxjs/toolkit'
import Reducertoool from '../Reducertoool'

const store = configureStore({
    reducer: {
        counter: Reducertoool
    }
});

export default store

