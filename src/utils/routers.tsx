import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { OptionContextProvider } from '../contexts';
import App from '../App';
import SubApp from '../SubApp';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: (
      <OptionContextProvider>
        <App />
      </OptionContextProvider>
    ),
  },
  {
    path: '/sub',
    element: (
      <OptionContextProvider>
        <SubApp />
      </OptionContextProvider>
    ),
  },
]);

export default null;
