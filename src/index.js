import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

LogRocket.init('3j5gn7/reactmeals');
LogRocket.identify('Tester', {
  name: 'Richard',
  email: 'richard.odonoghue.nz@gmail.com',
});

setupLogRocketReact(LogRocket);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
