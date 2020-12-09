import React from 'react'

import useDispatch from '../hooks/useDispatch'
import useSelector from '../hooks/useSelector'
import { changeLocale } from '../store/actions/locale';

import { LOCALES } from '../constants'

export const LanguageSwitch = () => {
  const currentLocale = useSelector('locale')
  const options = LOCALES.map(locale => <option value={locale} selected={locale === currentLocale}>{locale}</option>)

  const dispatch = useDispatch()

  return (
    <div>
      <select onChange={e => dispatch(changeLocale(e.target.value))}>
        {options}
      </select>
    </div>
  )
}
