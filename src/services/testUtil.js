import { render } from '@testing-library/react';
import { StateProvider } from '../store/store';
import { TranslationProvider } from '../components/TranslationProvider' 

export const renderWithContexts = component => {
  return render(
    <StateProvider>
      <TranslationProvider>
        {component}
      </TranslationProvider>
    </StateProvider>
  );
}

export const CombinedProvider = ({ children }) => (
  <StateProvider>
    <TranslationProvider>
      {children}
    </TranslationProvider>
  </StateProvider>
)
