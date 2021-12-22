import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainStore from './stores/mainStore';

const mainStore = new MainStore();
export const Context = createContext(mainStore);

ReactDOM.render(
  <Context.Provider value={mainStore}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);