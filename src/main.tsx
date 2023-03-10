import 'app/assets/css/global.css';
import 'app/assets/css/design-system.css';
import 'app/assets/css/reset.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app/app'

const dom = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(dom)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
