import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { OptionContextProvider } from '../contexts';

export const routers = createBrowserRouter([
  {
    path: '/*',
    element: (
      <OptionContextProvider>
        <App />
      </OptionContextProvider>
    ),
  },
]);

export default null;
