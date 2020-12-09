import { useContext } from 'react';

import state from '../store/store';

const useDispatch = () => {
  const { dispatch } = useContext(state);

  return dispatch
}

export default useDispatch;
