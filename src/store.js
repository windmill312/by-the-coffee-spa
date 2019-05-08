import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { cart } from './modules/cart';

const createRootReducer = history =>
  combineReducers({
    cart,
    router: connectRouter(history),
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history) {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history))),
  );

  return store;
}
