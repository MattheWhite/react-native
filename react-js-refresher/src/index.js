import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { ReactApp } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactApp />
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root')); => React element/component's name always has to start with capital letter, this is what tells React it is a custom component which it has to render, not a default built-in one

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
