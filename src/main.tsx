import { globalCSS } from './../stitches.config';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './Components/Context/UserContext';

globalCSS();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </React.StrictMode>,
);
