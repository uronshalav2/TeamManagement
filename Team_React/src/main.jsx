import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Errorpage from './Components/Errorpage'
import Account from './Components/Account.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Errorpage />
  },
  {
    path:"/Account",
    element:<Account/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router }/>
  </React.StrictMode>,
)
