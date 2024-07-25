import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(<App />);
