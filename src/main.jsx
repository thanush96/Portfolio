import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initGA, pageview } from './analytics';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize Google Analytics (if configured)
initGA();
// Log initial pageview
pageview(window.location.pathname + window.location.search);
