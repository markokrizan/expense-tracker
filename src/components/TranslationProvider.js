import React, { createContext } from 'react';
import useSelector from '../hooks/useSelector'
import translations from '../lang'

const translationContext = createContext();

const { Provider } = translationContext;

export const TranslationProvider = ({ children }) => {
  const locale = useSelector('locale')

  return (
    <Provider value={{
      $t: key =>  translations[locale][key] || key
    }}>
      {children}
    </Provider>
  );
}

export default translationContext;
