import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ColorEdditroStore from './stores/colorEdditorStore';
import ErrorBoundry from './components/error-boundry/error-boundry';

const colorEdditorStore = new ColorEdditroStore();
export const Context = createContext(colorEdditorStore);

ReactDOM.render(
  <ErrorBoundry>
    <Context.Provider value={colorEdditorStore}>
      <App />
    </Context.Provider>
  </ErrorBoundry>,
  document.getElementById('root')
);