import { createStore } from 'redux'
import CounterReducer from '../CountReducer/CounterReducer'

const store = createStore(CounterReducer)

export default store  