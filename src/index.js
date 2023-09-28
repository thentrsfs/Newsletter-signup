import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx"

import "./style.css"
const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><App /></StrictMode>);