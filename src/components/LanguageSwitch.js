import React from 'react'

import useDispatch from '../hooks/useDispatch'
import useSelector from '../hooks/useSelector'
import { changeLocale } from '../store/actions/locale';

import { LOCALES } from '../constants'

const LanguageSwitch = () => {
  const currentLocale = useSelector('locale')
  const options = LOCALES.map(locale => <option key={locale.code} value={locale.code}>{locale.name}</option>)

  const dispatch = useDispatch()

  return (
    <div>
      <select onChange={e => dispatch(changeLocale(e.target.value))} defaultValue={currentLocale}>
        {options}
      </select>
    </div>
  )
}

export default LanguageSwitch
