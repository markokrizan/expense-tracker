export const addTransaction = transaction => ({
  type: 'ADD_TRANSACTION',
  payload: transaction
})

export const deleteTransaction = id => ({
  type: 'DELETE_TRANSACTION',
  payload: id
})

export const updateTransaction = transaction => ({
  type: 'UPDATE_TRANSACTION',
  payload: transaction
})
