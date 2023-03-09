import '@/assets/css/global.css';
import '@/assets/css/design-system.css';
import '@/assets/css/normalize.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const dom = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(dom)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
