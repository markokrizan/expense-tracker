import React from 'react'

import useDispatch from '../hooks/useDispatch'
import useSelector from '../hooks/useSelector'
import { changeCurrency } from '../store/actions/currency';

import { CURRENCIES } from '../constants'

const CurrencySwitch = () => {
  const currentCurrency = useSelector('currency')
  const options = CURRENCIES.map(currency => <option key={currency.symbol} value={currency.symbol}>{currency.name}</option>)

  const dispatch = useDispatch()

  return (
    <div>
      <select onChange={e => dispatch(changeCurrency(e.target.value))} defaultValue={currentCurrency}>
        {options}
      </select>
    </div>
  )
}

export default CurrencySwitch
