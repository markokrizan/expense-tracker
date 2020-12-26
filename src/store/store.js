import React, { createContext, useReducer, useMemo } from 'react';
import rootReducer from './reducers';
import { DEFAULT_LOCALE } from '../constants'
import utilService from '../services/util'

const defaultState = {
  locale: DEFAULT_LOCALE,
  transactions: []
}

const state = createContext(defaultState);

const { Provider } = state;

export const StateProvider = ({ children }) => {
  const initialState = utilService.loadPersistedState() || defaultState

  const [ state, dispatch ] = useReducer(rootReducer, initialState);

  utilService.persistState(state)

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