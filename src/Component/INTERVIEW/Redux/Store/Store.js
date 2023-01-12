import { createStore } from 'redux'
import rootReducer from '../Reducers/RootReducer'

const Storeinter = createStore(rootReducer)

export default Storeinter