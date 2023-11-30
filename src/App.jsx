import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./todo";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
