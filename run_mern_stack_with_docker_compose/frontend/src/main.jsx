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

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ----------------- FRONTEND ERROR LOGGING -----------------

// 1️⃣ Override console.error to stdout
const originalError = console.error;
console.error = (...args) => {
  console.log("🚨 FRONTEND ERROR:", ...args);
  originalError(...args);
};

// 2️⃣ Catch uncaught runtime errors
window.addEventListener('error', (event) => {
  console.log("🚨 UNCAUGHT ERROR:", event.message, "at", event.filename, ":", event.lineno);
});

// 3️⃣ Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.log("🚨 UNHANDLED PROMISE REJECTION:", event.reason);
});

// 4️⃣ Optional: catch React component errors using Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("🚨 REACT COMPONENT ERROR:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
// ------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
