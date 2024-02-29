import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'

// Символ ! в TypeScript обозначает утверждение уверенности (non-null assertion). Он сообщает TypeScript, что значение перед ним никогда не будет равно null или undefined. В вашем случае, ! указывает TypeScript, что вы уверены, что document.getElementById('root') всегда будет возвращать элемент с идентификатором 'root', и вы можете использовать его без проверки на null
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
