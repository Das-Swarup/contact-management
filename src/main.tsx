import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// @ts-ignore
import { store } from './Redux/Store';

const rootElement = document.getElementById('root') as HTMLElement ;
  const root = ReactDOM.createRoot(rootElement);
  // Rest of your code using the 'root' variable


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
