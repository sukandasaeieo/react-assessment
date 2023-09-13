import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import Homeuser from './Homeuser';
import Homeadmin from './Homeadmin';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Homeuser",
    element: <Homeuser />,
  },
  {
    path: "/Homeadmin",
    element: <Homeadmin />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

