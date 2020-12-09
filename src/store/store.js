import React, { createContext, useReducer, useMemo } from 'react';
import rootReducer from './reducers';
import { DEFAULT_LOCALE } from '../constants'

const initialState = {
  locale: DEFAULT_LOCALE,
  transactions: []
}

const state = createContext(initialState);

const { Provider } = state;

export const StateProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(rootReducer, initialState);

  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <Provider value={{
      store,
      dispatch
    }}>
      {children}
    </Provider>
  );
}

export default state;