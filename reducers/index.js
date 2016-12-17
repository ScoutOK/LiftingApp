import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  route: require('./route').default,
})

export default rootReducer
