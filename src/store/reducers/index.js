import { merge } from 'lodash'

import transactionReducer from './transaction'

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
  transactions: transactionReducer
})

export default rootReducer;
