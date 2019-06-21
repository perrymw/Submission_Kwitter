import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { logger } from "redux-logger";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        logger,
        thunk,
        // ... other middlewares ...
      )
    )
  );
  store.subscribe(() => {
    localStorage.setItem('auth', JSON.stringify(store.getState().auth))
  });
  
  return store;
}
