
import transactionReducer from './transaction'
import locale from './locale'

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
  transactions: transactionReducer,
  locale: locale
})

export default rootReducer;
