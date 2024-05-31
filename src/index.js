import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import { ReactLenis } from '@studio-freight/react-lenis';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>
);