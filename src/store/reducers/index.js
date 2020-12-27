
import transaction from './transaction'
import locale from './locale'
import currency from './currency'

function combineReducers(reducers) {  
  return (state = {}, action) => {
    let newState = {...state};
    for (let key in reducers) {
      newState = reducers[key](newState, action);
    }
    return newState;
  }
}

const rootReducer = combineReducers({
  transaction,
  locale,
  currency
})

export default rootReducer;
