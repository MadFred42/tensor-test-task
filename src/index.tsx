import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainStore from './stores/mainStore';
import ErrorBoundry from './components/error-boundry/error-boundry';

const mainStore = new MainStore();
export const Context = createContext(mainStore);

ReactDOM.render(
  <ErrorBoundry>
    <Context.Provider value={mainStore}>
      <App />
    </Context.Provider>
  </ErrorBoundry>,
  document.getElementById('root')
);