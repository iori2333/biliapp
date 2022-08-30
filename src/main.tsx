import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import App from '@/App';
import store from '@/store';
import theme from '@/theme';
import '@/index.scss';
import TauriProvider from './components/TauriProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <TauriProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </TauriProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
