import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
if (typeof window !== 'undefined' && !window.safari) {
  window.safari = {};
}

window.addEventListener('load', () => {
  const script = document.createElement('script');
  script.src = "https://cdn.enable.co.il/licenses/enable-L231329s3li1y4qd-1223-69993/init.js";
  script.async = true;
  script.onerror = () => console.warn("Enable script failed to load");
  document.body.appendChild(script);
});
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
