import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import ReduxThunk from "redux-thunk";
import List from "./components/list/list.js";
import { Provider } from "react-redux";
import { newStore } from "./stores/store";

const App = () => {
  const store = newStore();
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {});
}
