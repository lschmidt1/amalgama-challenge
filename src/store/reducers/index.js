import { combineReducers } from 'redux'

import armiesReducer from './armies'

const rootReducer = () => combineReducers({
  armies: armiesReducer
})

export default rootReducer