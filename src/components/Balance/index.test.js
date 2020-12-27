import { renderWithContexts, CombinedProvider } from '../../services/testUtil';
import Balance from './index';
import useTranslation from '../../hooks/useTranslation'
import { renderHook } from '@testing-library/react-hooks'


test("balance renders", () => {
  renderWithContexts(<Balance/>);
});

test("balance content valid", () => {
  const { getByText } = renderWithContexts(<Balance/>);

  const { result } = renderHook(() => useTranslation('YOUR_BALANCE'), { wrapper: CombinedProvider })

  getByText(result.current)
})
