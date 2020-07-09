import React from "react";
import MainTemplate from "templates/MainTemplate";
import { Provider } from "react-redux";
import store from "ducks/store";
import Test from "pages/test";

function App() {
  return (
    <Provider store={store}>
      <MainTemplate>
        <div className='App'>
          <p>dziala</p>
        </div>
        <Test />
      </MainTemplate>
    </Provider>
  );
}

export default App;
