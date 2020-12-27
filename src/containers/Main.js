import React from 'react'
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

const Main = () => {
  return (
    <>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </>
  )
}

export default Main;
