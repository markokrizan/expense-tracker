import React, { createContext, useReducer, useMemo } from 'react';
import rootReducer from './reducers';

const initialState = {
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