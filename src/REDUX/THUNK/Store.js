// ==================THUNK=====================
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './RootReducer'

const middleWare = [thunk]

const STORETHUNk = createStore(RootReducer, applyMiddleware(...middleWare))


export default STORETHUNk



// ======================SAGA========================
// import { applyMiddleware, combineReducers, createStore } from 'redux'
// import createSagaMiddleware from "redux-saga"
// import rootSaga from '../Saga/RootSaga'
// import RootReducer from './RootReducer'

// const sagaMiddleWare = createSagaMiddleware()
// const middleWare = [sagaMiddleWare]
// const STORETHUNk = createStore(RootReducer, applyMiddleware(...middleWare))

// sagaMiddleWare.run(rootSaga)

// export default STORETHUNk
