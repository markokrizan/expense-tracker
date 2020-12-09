import { useContext } from 'react';
import { get } from 'lodash'

import state from '../store/store';

const useSelector = stateKey => {
  const { store } = useContext(state);

  return get(store[0], stateKey, null);
}

export default useSelector;
