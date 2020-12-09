import React, { useState } from 'react'

import useDispatch from '../store/helpers/useDispatch'
import { addTransaction } from '../store/actions/transactions';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0); 

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault()

    dispatch(addTransaction({
        id:  Math.floor(Math.random() * 100000000),
        text,
        amount: parseInt(amount)
    }))
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;