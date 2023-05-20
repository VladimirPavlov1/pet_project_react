import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme/theme'
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
import 'modern-normalize';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename='/group_project_6_final'>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);

