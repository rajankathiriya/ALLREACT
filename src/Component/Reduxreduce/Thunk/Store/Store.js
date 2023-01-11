import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../RootReducer'
import createSagaMiddleware from "redux-saga"
import rootSaga from '../Saga/RootSaga'

// const sagaMiddleWare = createSagaMiddleware()

// const middleWare = [sagaMiddleWare]
const middleWare = [thunk]

const store = createStore(RootReducer, applyMiddleware(...middleWare))

// sagaMiddleWare.run(rootSaga)

export default store
