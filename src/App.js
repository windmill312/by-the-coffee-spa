import React from 'react';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';
import Router from './Router';
import { GlobalStyles, theme } from './theme';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);

const App = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <Router history={history} />
      </React.Fragment>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
