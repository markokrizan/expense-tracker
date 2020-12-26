import React, { useState } from 'react'

import useDispatch from '../hooks/useDispatch'
import useTranslation from '../hooks/useTranslation'
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
      <h3>{useTranslation('ADD_NEW_TRANSACTION')}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">{useTranslation('TEXT')}</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder={useTranslation('ENTER_TEXT_PLACEHOLDER')} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {useTranslation('AMOUNT')} {useTranslation('AMOUNT_HELP')}
          </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder={useTranslation('ENTER_AMOUNT_PLACEHOLDER')} />
        </div>
        <button className="btn">{useTranslation('ADD_TRANSACTION')}</button>
      </form>
    </>
  )
}

export default AddTransaction;
