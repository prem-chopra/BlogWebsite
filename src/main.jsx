import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyState } from './Context/MyState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyState>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </MyState>
)
