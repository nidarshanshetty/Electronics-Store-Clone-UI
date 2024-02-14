import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Componenet/Login.jsx'
import Register from './Componenet/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/register"}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
 