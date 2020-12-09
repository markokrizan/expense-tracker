import './App.scss';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { StateProvider } from './store/store';

function App() {
  return (
    <StateProvider>
      <Header title={'Expense tracker'}/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </StateProvider>
  );
}

export default App;
