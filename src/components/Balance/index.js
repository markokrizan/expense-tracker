import React from 'react'
import useSelector from '../../hooks/useSelector'
import useTranslation from '../../hooks/useTranslation'

const Balance = () => {
  const transactions = useSelector('transactions');
  const currency = useSelector('currency')

  const total = transactions.reduce((acc, transaction) => {
    return acc += transaction.amount;
  }, 0).toFixed(2)

  return (
    <div>
      <h4>{useTranslation('YOUR_BALANCE')}</h4>
      <h1><span data-testid="balance-currency">{currency}</span> <span data-testid="balance-total">{total}</span></h1>
    </div>
  )
}

export default Balance;
