import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx';
import InventoryPage from './InventoryPage.jsx';
import AboutUs from './AboutUs.jsx';
import Wishlist from './Wishlist.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "inventory",
    element: <InventoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "aboutUs",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
