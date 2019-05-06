import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { enthusiasm } from "./reducers/index";
import { StoreState } from "./types/index";

const store = createStore<StoreState, any, {}, {}>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
