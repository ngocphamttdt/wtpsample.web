import { createStore, applyMiddleware } from 'redux'
import {  devToolsEnhancer } from 'redux-devtools-extension'
import counterReducer from '../features/product/counter/counterReducer'
import rootReducer from './rootReducer'


export function configureStore() {
  const store = createStore(counterReducer)

  return store
}