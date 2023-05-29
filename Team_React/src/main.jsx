import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Errorpage from './Components/Errorpage'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Errorpage />
  },
  {
    path:'/Dashboard',
    element: <Dashboard/>,
    errorElement: <Errorpage/>
  },
  {
    path:"/Account/Register",
    element: <Register/>
  },
  {
    path:"/Account/Login",
    element: <Login/>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router }/>
  </React.StrictMode>,
)

