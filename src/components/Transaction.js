import React, { useState } from 'react'

import useDispatch from '../hooks/useDispatch'
import { updateTransaction, deleteTransaction } from '../store/actions/transactions';

const ItemForm = ({ transaction }) => {
  const dispatch = useDispatch()

  const handleUpdateTransaction = (prop, value) => {
    const transactionCopy = { ...transaction }
    transactionCopy[prop] = value;

    dispatch(updateTransaction(transactionCopy))
  }
  
  return (
    <>
      <input type="text" value={transaction.text} onChange={e => handleUpdateTransaction('text', e.target.value)} />
      <input type="number" value={transaction.amount} onChange={e => handleUpdateTransaction('amount', parseInt(e.target.value || 0))} />
    </>
  )
}

const ItemPreview = ({ transaction }) => (
  <>
    <span>{transaction.text}</span> 
    <span>{transaction.amount}</span>
  </>
)

const Transaction = ({ transaction }) => {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {isEditing ? <ItemForm transaction={transaction}/> : <ItemPreview transaction={transaction} />}
      <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}></button>
      <button className="delete-btn" onClick={() => dispatch(deleteTransaction(transaction.id))}></button>
    </li>
  )
}

export default Transaction
