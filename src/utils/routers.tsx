import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { OptionContextProvider } from '../contexts';
import App from '../App';
import SubApp from '../SubApp';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: (
      <BrowserRouter basename='/'>
        <OptionContextProvider>
          <App />
        </OptionContextProvider>
      </BrowserRouter>
    ),
  },
  {
    path: '/sub',
    element: (
      <BrowserRouter basename='/sub'>
        <OptionContextProvider>
          <SubApp />
        </OptionContextProvider>
      </BrowserRouter>
    ),
  },
]);

export default null;
