import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Settings from './Settings'

import useTranslation from '../hooks/useTranslation'

const AppLayout = () => {
  return (
    <Router>
      <Header title={useTranslation('TITLE')}/>
      <Switch>
        <div className="container">
          <Route path="/" exact>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default AppLayout;
