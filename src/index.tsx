import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/assets/styles/index.css';
import App from './app/App';
import { store } from './app/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
