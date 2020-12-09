import React from 'react'
import useSelector from '../hooks/useSelector'
import useTranslation from '../hooks/useTranslation';

export const IncomeExpenses = () => {
  const transactions = useSelector('transactions');

  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);

  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1
    .toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>{useTranslation('INCOME')}</h4>
            <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>{useTranslation('EXPENSE')}</h4>
            <p className="money minus">{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses;
