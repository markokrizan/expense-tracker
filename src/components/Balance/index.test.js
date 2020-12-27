import { renderWithContexts } from '../../services/testUtil';
import Balance from './index';


test("balance renders", () => {
  renderWithContexts(<Balance/>);
});
