import './App.scss';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import useTranslation from './hooks/useTranslation'
import { LanguageSwitch } from './components/LanguageSwitch';


function App() {
  return (
      <>
        <Header title={useTranslation('TITLE')}/>
        <LanguageSwitch/>
        <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </>
  );
}

export default App;
