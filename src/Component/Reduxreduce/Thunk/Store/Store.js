import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../RootReducer'


const middleWare = [thunk]

const store = createStore(RootReducer, applyMiddleware(...middleWare))

export default store

