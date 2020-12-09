import React from 'react'

import useDispatch from '../hooks/useDispatch'
import { deleteTransaction } from '../store/actions/transactions';

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch()

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} <span>{transaction.amount}</span>
      <button class="delete-btn" onClick={() => dispatch(deleteTransaction(transaction.id))}>x</button>
    </li>
  )
}

export default Transaction
