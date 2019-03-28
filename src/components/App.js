import React from 'react';
import { createBrowserHistory } from 'history';
import ThemeProvider from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from '../store';
import { GlobalStyles, theme } from '../theme';

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

/*class App extends Component {
  render() {
    return (
        <div className="container">
          <NavigationBar/>
          <FlashMessagesList/>
          {this.props.children}
        </div>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default App;*/
