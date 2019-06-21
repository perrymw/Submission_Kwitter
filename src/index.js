import configureStore, { history } from "./configureStore";
import { ConnectedRouter, connectRouter } from "connected-react-router";
import * as serviceWorker from "./serviceWorker";
import 'semantic-ui-css/semantic.min.css'
import { Provider } from "react-redux";
import { App } from "./components";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

export const store = configureStore({});




ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
