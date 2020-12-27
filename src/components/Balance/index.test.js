import { renderWithContexts, CombinedProvider } from '../../services/testUtil';
import Balance from './index';
import useTranslation from '../../hooks/useTranslation'
import useSelector from '../../hooks/useSelector'
import { renderHook } from '@testing-library/react-hooks'

test("balance renders", () => {
  renderWithContexts(<Balance/>);
});

test("balance title", () => {
  const { getByText } = renderWithContexts(<Balance/>);

  const { result: balanceTitle } = renderHook(() => useTranslation('YOUR_BALANCE'), { wrapper: CombinedProvider })

  getByText(balanceTitle.current)
})

test("balance currency", () => {
  const { getByTestId } = renderWithContexts(<Balance/>);

  const { result: balanceCurrency } = renderHook(() => useSelector('currency'), { wrapper: CombinedProvider })

  const currencyContainer = getByTestId('balance-currency')

  expect(currencyContainer.innerHTML).toBe(balanceCurrency.current);
})

test("balance value", () => {
  const { getByTestId } = renderWithContexts(<Balance/>);

  const { result: transactions } = renderHook(() => useSelector('transactions'), { wrapper: CombinedProvider })

  const balanceContainer = getByTestId('balance-total')

  const total = transactions.current.reduce((acc, transaction) => acc + transaction.amount, 0)

  expect(parseFloat(balanceContainer.innerHTML)).toBe(parseFloat(total));
})
