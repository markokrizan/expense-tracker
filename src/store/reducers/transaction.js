const transactionReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    case 'UPDATE_TRANSACTION':
      const transactionIndex = state.transactions.findIndex(transaction => transaction.id === action.payload.id)

      const updatedTransactions = [...state.transactions]
      updatedTransactions.splice(transactionIndex, 1, action.payload)

      const test = {
        ...state,
        transactions: updatedTransactions
      }

      return test
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions].filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state
  }
}

export default transactionReducer;
