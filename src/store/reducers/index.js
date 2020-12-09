import { merge } from 'lodash'

import transactionReducer from './transaction'
import locale from './locale'

function combineReducers(reducers) {  
  return (state = {}, action) => {
    let newState = {};
    for (let key in reducers) {
      newState = merge(newState, reducers[key](state, action));
    }
    return newState;
  }
}

const rootReducer = combineReducers({
  transactions: transactionReducer,
  locale: locale
})

export default rootReducer;
