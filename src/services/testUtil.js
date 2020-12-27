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
