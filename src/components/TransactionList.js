import React from 'react'
import Transaction from './Transaction';
import useSelector from '../hooks/useSelector'
import useTranslation from '../hooks/useTranslation'

const TransactionList = () => {
  const transactions = useSelector('transactions');

  return (
    <>
      <h3>{useTranslation('HISTORY')}</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
}

export default TransactionList;
