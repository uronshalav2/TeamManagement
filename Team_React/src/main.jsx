import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Errorpage from './Components/Errorpage'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider,Routes, Route } from 'react-router-dom'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './Dashboard.jsx'
import Account from './Account.jsx'
import DashboardTasks from './Components/DashboardComponents/DashboardTasks.jsx'
import DashboardTeams from './Components/DashboardComponents/DashboardTeams.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Errorpage />
  },
  {
    path:'/Dashboard',
    element: <Dashboard/>,
    errorElement: <Errorpage/>,
    children: [ 
      {
        path:'/Dashboard/Tasks',
        element:<DashboardTasks/>
      },
      {
        path:'/Dashboard/Teams',
        element:<DashboardTeams/>
      },
    ]
  },
  {
    path:"/Account",
    errorElement: <Errorpage/>,
    children : [
      {
        path:'/Account/Login',
        element:<Login/>
      },
      {
        path:'/Account/Register',
        element:<Register/>
      }
    ]
  }


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router }>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)

