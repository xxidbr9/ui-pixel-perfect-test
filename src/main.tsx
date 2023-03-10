import '@/assets/css/global.css';
import '@/assets/css/design-system.css';
import '@/assets/css/reset.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app'

const dom = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(dom)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
