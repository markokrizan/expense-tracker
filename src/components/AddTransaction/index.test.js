import { fireEvent } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'
import { isEmpty } from 'lodash'

import { renderWithContexts, CombinedProvider } from '../../services/testUtil';
import AddTransaction from './index';
import useTranslation from '../../hooks/useTranslation'
import useSelector from '../../hooks/useSelector'

test("add transaction renders", () => {
  renderWithContexts(<AddTransaction/>);
});


test("add a transaction", () => {
  const { getByLabelText, getByText } = renderWithContexts(<AddTransaction/>);

  const { result: textLabelText } = renderHook(() => useTranslation('TEXT'), { wrapper: CombinedProvider })
  const { result: amountLabelText } = renderHook(() => useTranslation('AMOUNT'), { wrapper: CombinedProvider })
  const { result: buttonLabel } = renderHook(() => useTranslation('ADD_TRANSACTION'), { wrapper: CombinedProvider })

  const textInput = getByLabelText(textLabelText.current);
  const amountInput = getByLabelText(amountLabelText.current);
  const addTransactionButton = getByText(buttonLabel.current);

  fireEvent.change(textInput, { target: { value: 'Test transaction' } });
  fireEvent.change(amountInput, { target: { value: 100 } });
  fireEvent.click(addTransactionButton);

  const { result: transactions } = renderHook(() => useSelector('transactions'), { wrapper: CombinedProvider })

  const addedTransaction = transactions.current.find(transaction => transaction.text === 'Test transaction')
  const total = transactions.current.reduce((acc, transaction) => acc + transaction.amount, 0)

  expect(!isEmpty(addedTransaction)).toBeTruthy();
  expect(total).toBe(100);
})
