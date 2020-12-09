import React from 'react'
import useSelector from '../store/helpers/useSelector'

const Balance = () => {
  const transactions = useSelector('transactions');

  const total = transactions.reduce((acc, transaction) => {
    return acc += transaction.amount;
  }, 0).toFixed(2)

  return (
    <div>
      <h4>Your balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance;
