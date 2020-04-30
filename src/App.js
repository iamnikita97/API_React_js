import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store';
import './App.css';
import Main from './Main';

function App() {
  //console.log(getAccessTokenFromLocalStorage(), 'Token is---');
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}
export default App;