import {combineReducers} from 'redux'
import counterReducer from '../features/product/counter/counterReducer'


const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer