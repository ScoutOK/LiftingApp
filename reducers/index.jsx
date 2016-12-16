import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  page: require('./page').default,
})

export default rootReducer
