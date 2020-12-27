import './styles/App.scss';
import AppLayout from './components/AppLayout'
import { StateProvider } from '../src/store/store';
import { TranslationProvider } from '../src/components/TranslationProvider'

function App() {
  return (
    <StateProvider>
      <TranslationProvider>
        <AppLayout />
      </TranslationProvider>
    </StateProvider>
  );
}

export default App;
