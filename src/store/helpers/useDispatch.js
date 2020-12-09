import { useContext } from 'react';

import state from '../store';

const useDispatch = () => {
  const { dispatch } = useContext(state);

  return dispatch
}

export default useDispatch;
