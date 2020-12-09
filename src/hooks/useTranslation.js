import { useContext } from 'react';

import translationContext from '../components/TranslationProvider';

const useStranslation = translationKey => {
  const { $t } = useContext(translationContext);
  
  return $t(translationKey)
}

export default useStranslation;
