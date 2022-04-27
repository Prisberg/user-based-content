import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  APIContextProvider  from "./Context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <APIContextProvider>

    <App />
    </APIContextProvider>

  </React.StrictMode>
);