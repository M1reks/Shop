import React from 'react'
import App from './App.jsx'
import './styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import './i18n'

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
)
