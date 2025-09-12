/*
Main configuration


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

/*Added on 12th for generating stdout*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// --- Redirect all console.error to stdout (so it shows in docker logs) ---
const originalError = console.error;
console.error = (...args) => {
  console.log("🚨 FRONTEND ERROR:", ...args);
  originalError(...args); // still keep default browser console
};
// ------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
